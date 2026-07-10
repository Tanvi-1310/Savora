const features = [
  {
    title: "Table Reservation",
    icon: "📅",
    description: "Book tables online with real-time availability.",
  },
  {
    title: "QR Menu",
    icon: "📱",
    description: "Customers can scan and order instantly.",
  },
  {
    title: "Inventory",
    icon: "📦",
    description: "Track stock and receive low-stock alerts.",
  },
  {
    title: "AI Recommendation",
    icon: "🤖",
    description: "Recommend dishes based on customer preferences.",
  },
];

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center">
          Smart Features
        </h2>

        <p className="text-gray-500 text-center mt-4">
          Everything your restaurant needs in one platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;