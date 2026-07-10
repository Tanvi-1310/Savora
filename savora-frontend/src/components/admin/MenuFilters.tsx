interface Props {
  onAddDish: () => void;
}

function MenuFilters({ onAddDish }: Props) {
  return (
    <div className="flex justify-between items-center">

      <input
        type="text"
        placeholder="Search dishes..."
        className="border rounded-xl px-4 py-2"
      />

      <div className="flex gap-3">

        <label htmlFor="category" className="sr-only">
          Category
        </label>

        <select
          id="category"
          className="border rounded-xl px-4"
        >
          <option>All Categories</option>
          <option>Pizza</option>
          <option>Italian</option>
          <option>Fast Food</option>
        </select>

        <button
          onClick={onAddDish}
          className="bg-orange-500 text-white px-5 py-2 rounded-xl"
        >
          Add Dish
        </button>

      </div>

    </div>
  );
}

export default MenuFilters;