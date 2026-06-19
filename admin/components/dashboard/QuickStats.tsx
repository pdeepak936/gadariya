import { quickStats } from '../../lib/dashboardData';

export function QuickStats() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <h3 className="text-xl font-bold text-secondary mb-6">📌 Quick Stats</h3>
      <div className="space-y-4">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} rounded-xl p-4 border-l-4 hover:shadow-md transition-all duration-300`}
          >
            <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-secondary mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
