function ReservationHero() {
  return (
    <section className="relative h-[70vh] w-full">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
        alt="Restaurant"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl px-6 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Reserve Your Table
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200">
            Enjoy a memorable dining experience with handcrafted dishes,
            elegant ambience, and exceptional hospitality.
          </p>

          <a
            href="#reservation-form"
            className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:bg-orange-600"
          >
            Book a Table
          </a>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6">
            <div>
              <h2 className="text-3xl font-bold">⭐ 4.9</h2>
              <p className="text-gray-300">Guest Rating</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5000+</h2>
              <p className="text-gray-300">Happy Guests</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">10+</h2>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationHero;