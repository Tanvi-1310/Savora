import AdminLayout from "../../layouts/AdminLayout";
import MenuFilters from "../../components/admin/MenuFilters";
import AddDishModal from "../../components/admin/AddDishModal";
import MenuTable from "../../components/admin/MenuTable";
import type { Dish } from "../../types/menu";
import { useState } from "react";


function MenuManagement() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const handleEdit = (dish: Dish) => {
    setSelectedDish(dish);
    setEditOpen(true);
};

  return (
    <AdminLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-3xl font-bold">
            Menu Management
          </h1>

          <p className="text-gray-500">
            Manage dishes available in your restaurant.
          </p>

        </div>

      <MenuFilters
       onAddDish={() => setIsModalOpen(true)}
      />
        <AddDishModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
/>
        <MenuTable onEdit={handleEdit} />


      </div>

    </AdminLayout>
  );
}

export default MenuManagement;