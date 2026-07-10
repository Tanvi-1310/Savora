import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Menu", path: "/admin/menu" },
  { name: "Inventory", path: "/admin/inventory" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Reservations", path: "/admin/reservations" },
  { name: "Employees", path: "/admin/employees" },
  { name: "Analytics", path: "/admin/analytics" },
  { name: "Settings", path: "/admin/settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold text-orange-500">
        Savora
      </h1>

      <nav className="mt-10">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 mb-2 transition ${
                isActive
                  ? "bg-orange-500"
                  : "hover:bg-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;