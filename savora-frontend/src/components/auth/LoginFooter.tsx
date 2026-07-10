import { Link } from "react-router-dom";

function LoginFooter() {
  return (
    <div className="mt-8 text-center">

      <p className="text-gray-600">
        Don't have an account?
      </p>

      <Link
        to="/register"
        className="text-orange-500 font-semibold hover:underline"
      >
        Create Account
      </Link>

    </div>
  );
}

export default LoginFooter;