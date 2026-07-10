import { benefits } from "../../data/us";

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Why Choose Savora?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Everything needed to run a modern restaurant,
            from reservations to AI-powered insights.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {benefits.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;