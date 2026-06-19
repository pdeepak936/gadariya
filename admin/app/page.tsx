import { Sidebar } from '../components/layout/Sidebar';
import { TopBar } from '../components/layout/TopBar';
import { StatCard } from '../components/dashboard/StatCard';
import { SalesChart } from '../components/dashboard/SalesChart';
import { QuickStats } from '../components/dashboard/QuickStats';
import { TopProducts } from '../components/dashboard/TopProducts';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { OrdersTable } from '../components/dashboard/OrdersTable';
import { stats } from '../lib/dashboardData';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <div className="p-6 lg:p-8 flex-1 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <SalesChart />
            <QuickStats />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <TopProducts />
            <RecentActivity />
          </div>

          <OrdersTable />
        </div>
      </div>
    </div>
  );
}
