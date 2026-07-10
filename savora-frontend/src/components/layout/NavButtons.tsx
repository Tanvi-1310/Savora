import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <div className="hidden md:flex gap-4">

      <Link
        to="/login"
        className="px-5 py-2 rounded-xl border border-orange-500 text-orange-500 hover:bg-orange-50 transition"
      >
        Login
      </Link>

      <Link
        to="/reservation"
        className="px-5 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition"
      >
        Book Table
      </Link>

    </div>
  );
}

export default NavButtons;