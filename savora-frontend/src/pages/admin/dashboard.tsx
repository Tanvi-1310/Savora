import AdminLayout from "../../layouts/AdminLayout";
import StatsGrid from "../../components/admin/Statsgrid";
import RevenueChart from "../../components/admin/RevenueChart";
import RecentOrders from "../../components/admin/RecentOrders";
import LowStock from "../../components/admin/LowStock";
import ReservationTable from "../../components/admin/ReservationTable";

function Dashboard() {
  return (
   <AdminLayout>
  <div className="space-y-8">

    <div>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back! Here's what's happening today.
      </p>
    </div>

    <StatsGrid />

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  <div className="xl:col-span-2">
    <RevenueChart />
  </div>

  <RecentOrders />
<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  <LowStock />

  <ReservationTable />

</div>

</div>

  </div>
</AdminLayout>
  );
}

export default Dashboard;