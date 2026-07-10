import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";
import type { Dish } from "../../types/menu";

interface Props {
  item: Dish;
  onEdit: (dish: Dish) => void;
}

function MenuRow({ item, onEdit }: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-4 text-3xl">{item.image}</td>

      <td>{item.name}</td>

      <td>{item.category}</td>

      <td>₹{item.price}</td>

      <td>
        <StatusBadge available={item.available} />
      </td>

      <td>
        <ActionButtons
          onEdit={() => onEdit(item)}
          onDelete={() => console.log("Delete", item.id)}
        />
      </td>
    </tr>
  );
}

export default MenuRow;