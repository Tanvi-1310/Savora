import DashboardCard from "./DashboardCard";
import { dashboardStats } from "../../data/dashboard";

function StatsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {dashboardStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
            icon={<Icon size={28} />}
          />
        );
      })}

    </section>
  );
}

export default StatsGrid;