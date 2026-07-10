import { lowStockItems } from "../../data/inventory";

function LowStock() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-6">
        Low Stock Alerts
      </h2>

      <div className="space-y-4">

        {lowStockItems.map((item) => (

          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3 last:border-none"
          >

            <div>

              <h3 className="font-medium">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.quantity}
              </p>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                item.status === "Critical"
                  ? "bg-red-100 text-red-600"
                  : item.status === "Low"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LowStock;