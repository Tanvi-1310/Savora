function LoginForm() {
  return (
    <form className="space-y-5">

      <div>

        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
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
        className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
      >
        Login
      </button>

    </form>
  );
}

export default LoginForm;