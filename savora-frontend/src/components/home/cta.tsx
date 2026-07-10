function CTA() {
  return (
    <section className="py-24 bg-orange-400">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Transform Your Restaurant?
        </h2>

        <p className="text-orange-100 text-lg mt-6 max-w-2xl mx-auto">
          Simplify operations, delight your customers, and grow your business
          with Savora's smart restaurant management platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>

          <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-500 transition">
            Request Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;