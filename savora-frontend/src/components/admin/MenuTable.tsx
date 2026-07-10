import type { Dish } from "../../types/menu";
import { menuItems } from "../../data/menu";
import MenuRow from "./MenuRow";

interface Props {
  onEdit: (dish: Dish) => void;
}

function MenuTable({ onEdit }: Props) {

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {menuItems.map((item) => (
            <MenuRow
            key={item.id}
             item={item}
             onEdit={onEdit}
/>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MenuTable;