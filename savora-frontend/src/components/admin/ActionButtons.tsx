import { Pencil, Trash2 } from "lucide-react";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

function ActionButtons({ onEdit, onDelete }: Props) {
  return (
    <div className="flex gap-3">
      <button
        aria-label="Edit dish"
        onClick={onEdit}
        className="text-blue-600 hover:text-blue-800"
      >
        <Pencil size={18} />
      </button>

      <button
        aria-label="Delete dish"
        onClick={onDelete}
        className="text-red-600 hover:text-red-800"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default ActionButtons;