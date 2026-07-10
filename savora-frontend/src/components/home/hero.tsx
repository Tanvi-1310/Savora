function Hero() {
  return (
    <section className="min-h-[90vh] bg-orange-50">
      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-orange-600 font-semibold mb-4">
            Smart Restaurant Management
          </p>

          <h1 className="text-6xl font-bold leading-tight text-gray-900">
            Manage Your Restaurant
            <span className="text-orange-500"> Smarter</span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Savora helps restaurants manage reservations,
            orders, inventory, staff, analytics, and customer
            experience—all from one powerful platform.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition">
              Get Started
            </button>

            <button className="border border-orange-500 text-orange-500 px-8 py-4 rounded-xl hover:bg-orange-100 transition">
              Explore Menu
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="w-[420px] h-[420px] rounded-full bg-orange-200 flex items-center justify-center text-8xl">
            🍽️
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
