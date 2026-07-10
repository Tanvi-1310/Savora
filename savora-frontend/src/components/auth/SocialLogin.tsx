function SocialLogin() {
  return (
    <div className="mt-8">

      <div className="flex items-center gap-3 mb-6">
        <hr className="flex-1" />
        <span className="text-gray-500 text-sm">
          OR
        </span>
        <hr className="flex-1" />
      </div>

      <button
        className="w-full border rounded-xl py-3 hover:bg-gray-50 transition"
      >
        Continue with Google
      </button>

    </div>
  );
}

export default SocialLogin;