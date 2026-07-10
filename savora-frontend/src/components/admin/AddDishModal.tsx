interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function AddDishModal({
  isOpen,
  onClose,
}: Props) {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Add New Dish
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Dish Name"
            className="w-full border rounded-xl p-3"
          />

          <label htmlFor="category" className="sr-only">
            Category
            </label>

            <select
             id="category"
             className="w-full border rounded-xl p-3"
            >
            <option>Pizza</option>
            <option>Italian</option>
            <option>Dessert</option>

          </select>

          <input
            type="number"
            placeholder="Price"
            className="w-full border rounded-xl p-3"
          />

          <textarea
            placeholder="Description"
            rows={4}
            className="w-full border rounded-xl p-3"
          />

          <label htmlFor="image">
             Upload Image
           </label>

            <input
                 id="image"
                 type="file"
            />

          <label className="flex gap-3">

            <input
              type="checkbox"
            />

            Available

          </label>

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border"
          >
            Cancel
          </button>

          <button
            className="px-5 py-2 rounded-xl bg-orange-500 text-white"
          >
            Save Dish
          </button>

        </div>

      </div>

    </div>

  );
}

export default AddDishModal;