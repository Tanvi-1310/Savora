const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "₹299",
    image: "🍕",
    rating: "4.8",
  },
  {
    id: 2,
    name: "Veg Biryani",
    price: "₹249",
    image: "🍛",
    rating: "4.7",
  },
  {
    id: 3,
    name: "Burger Combo",
    price: "₹199",
    image: "🍔",
    rating: "4.6",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    price: "₹349",
    image: "🍝",
    rating: "4.9",
  },
];

function PopularDishes() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Popular Dishes
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Loved by our customers
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {dishes.map((dish) => (

            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
            >

              <div className="text-7xl text-center">
                {dish.image}
              </div>

              <h3 className="text-xl font-semibold mt-6">
                {dish.name}
              </h3>

              <div className="flex justify-between items-center mt-5">

                <span className="text-orange-600 font-bold text-xl">
                  {dish.price}
                </span>

                <span>
                  ⭐ {dish.rating}
                </span>

              </div>

              <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">
                Order Now
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDishes;