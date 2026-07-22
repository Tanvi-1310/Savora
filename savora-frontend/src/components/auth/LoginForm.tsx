import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authServices";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login({ email, password });

      // Store the token and user info
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err: any) {
      const message =
        err.response?.data?.detail || "Login failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
          {error}
        </div>
      )}

      <div>

        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
        />

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
        />

      </div>

      <div className="flex justify-between text-sm">

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember Me
        </label>

        <button
          type="button"
          className="text-orange-500"
        >
          Forgot Password?
        </button>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Login"}
      </button>

    </form>
  );
}

export default LoginForm;
