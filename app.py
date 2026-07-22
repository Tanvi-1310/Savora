from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
import jwt
import datetime
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"])

# Secret key for JWT tokens
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "savora-secret-key-change-in-production")

DATABASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "savora.db")


def get_db():
    """Get a database connection."""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initialize the database with the users table."""
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'customer'
        )
    """)
    conn.commit()
    conn.close()


# Initialize database on startup
init_db()


@app.route("/api/auth/register", methods=["POST"])
def register():
    """Register a new user."""
    data = request.get_json()

    # Validate required fields
    if not data:
        return jsonify({"detail": "Request body is required"}), 400

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    password = data.get("password", "")
    role = data.get("role", "customer")

    if not name:
        return jsonify({"detail": "Name is required"}), 400
    if not email:
        return jsonify({"detail": "Email is required"}), 400
    if not password:
        return jsonify({"detail": "Password is required"}), 400
    if len(password) < 6:
        return jsonify({"detail": "Password must be at least 6 characters"}), 400
    if role not in ("admin", "customer", "kitchen"):
        return jsonify({"detail": "Invalid role"}), 400

    # Check if email already exists
    conn = get_db()
    existing = conn.execute("SELECT id FROM users WHERE email = ?", (email,)).fetchone()
    if existing:
        conn.close()
        return jsonify({"detail": "Email already registered"}), 409

    # Hash password and insert user
    hashed_password = generate_password_hash(password)
    cursor = conn.execute(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        (name, email, hashed_password, role),
    )
    conn.commit()
    user_id = cursor.lastrowid
    conn.close()

    # Generate token for the new user
    token = jwt.encode(
        {
            "user_id": user_id,
            "email": email,
            "role": role,
            "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=24),
        },
        app.config["SECRET_KEY"],
        algorithm="HS256",
    )

    return jsonify({
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user_id,
            "name": name,
            "email": email,
            "role": role,
        },
    }), 201


@app.route("/api/auth/login", methods=["POST"])
def login():
    """Authenticate a user and return a JWT token."""
    data = request.get_json()

    if not data:
        return jsonify({"detail": "Request body is required"}), 400

    email = data.get("email", "").strip()
    password = data.get("password", "")

    if not email or not password:
        return jsonify({"detail": "Email and password are required"}), 400

    # Look up user
    conn = get_db()
    user = conn.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
    conn.close()

    if not user or not check_password_hash(user["password"], password):
        return jsonify({"detail": "Invalid email or password"}), 401

    # Generate JWT token
    token = jwt.encode(
        {
            "user_id": user["id"],
            "email": user["email"],
            "role": user["role"],
            "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=24),
        },
        app.config["SECRET_KEY"],
        algorithm="HS256",
    )

    return jsonify({
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"],
            "role": user["role"],
        },
    }), 200


@app.route("/api/auth/me", methods=["GET"])
def get_current_user():
    """Get the current authenticated user's info."""
    auth_header = request.headers.get("Authorization", "")

    if not auth_header.startswith("Bearer "):
        return jsonify({"detail": "Missing or invalid token"}), 401

    token = auth_header.split(" ")[1]

    try:
        payload = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        return jsonify({"detail": "Token has expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"detail": "Invalid token"}), 401

    conn = get_db()
    user = conn.execute("SELECT id, name, email, role FROM users WHERE id = ?", (payload["user_id"],)).fetchone()
    conn.close()

    if not user:
        return jsonify({"detail": "User not found"}), 404

    return jsonify({
        "id": user["id"],
        "name": user["name"],
        "email": user["email"],
        "role": user["role"],
    }), 200


if __name__ == "__main__":
    app.run(debug=True, port=8000)
