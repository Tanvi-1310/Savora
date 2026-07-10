import DishCard from "./DishCard";
import type { Dish } from "../../types/menu";

interface Props {
  dishes: Dish[];
}

function DishGrid({ dishes }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
          />
        ))}

      </div>
    </section>
  );
}

export default DishGrid;