const categories = [
  "All",
  "Indian",
  "Chinese",
  "Italian",
  "Desserts",
  "Drinks",
];

interface Props {
  selected: string;
  setSelected: (category: string) => void;
}

function MenuCategories({
  selected,
  setSelected,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`rounded-full px-6 py-2 transition ${
            selected === category
              ? "bg-orange-500 text-white"
              : "border hover:bg-orange-500 hover:text-white"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}

export default MenuCategories;