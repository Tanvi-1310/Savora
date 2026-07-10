const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    features: [
      "Table Reservations",
      "QR Menu",
      "Order Management",
      "Basic Analytics",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹2,499",
    period: "/month",
    features: [
      "Everything in Starter",
      "Inventory Management",
      "Kitchen Dashboard",
      "Employee Management",
      "AI Recommendations",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Branches",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
      "Dedicated Manager",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Simple Pricing
          </h2>

          <p className="text-gray-500 mt-4">
            Choose a plan that fits your restaurant.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`rounded-3xl p-8 border transition hover:shadow-xl ${
                plan.highlighted
                  ? "border-orange-500 shadow-xl"
                  : "border-gray-200"
              }`}
            >

              {plan.highlighted && (
                <div className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-6">

                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-gray-500">
                  {plan.period}
                </span>

              </div>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <li key={feature}>
                    ✔ {feature}
                  </li>

                ))}

              </ul>

              <button
                className={`w-full mt-10 py-3 rounded-xl ${
                  plan.highlighted
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-orange-500 text-orange-500 hover:bg-orange-50"
                }`}
              >
                Choose Plan
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;