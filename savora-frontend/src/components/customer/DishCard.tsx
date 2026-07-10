import { Star } from "lucide-react";
import type { Dish } from "../../types/menu";

interface Props {
  dish: Dish;
}

function DishCard({ dish }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Dish Image */}
      <div className="h-56 bg-gray-200 flex items-center justify-center text-6xl">
        {dish.image || "🍽️"}
      </div>

      {/* Card Content */}
      <div className="p-5">

        <div className="flex justify-between items-center">

          <h3 className="text-xl font-semibold">
            {dish.name}
          </h3>

          <span className="font-bold text-orange-600">
            ₹{dish.price}
          </span>

        </div>

        <p className="text-gray-500 mt-2">
          {dish.description}
        </p>

        <div className="flex items-center gap-1 mt-4 text-yellow-500">

          <Star size={18} fill="currentColor" />

          <span className="text-gray-700 text-sm">
            4.8
          </span>

        </div>

        <button className="mt-5 w-full rounded-xl bg-orange-500 py-3 text-white font-medium hover:bg-orange-600 transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default DishCard;