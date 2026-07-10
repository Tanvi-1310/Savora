import { recentOrders } from "../../data/order";

function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-6">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b text-left text-gray-500">

              <th className="pb-3">Order</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Table</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>

            </tr>

          </thead>

          <tbody>

            {recentOrders.map((order) => (

              <tr
                key={order.id}
                className="border-b last:border-none hover:bg-gray-50"
              >

                <td className="py-4">{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.table}</td>

                <td>{order.amount}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      order.status === "Served"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Preparing"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentOrders;