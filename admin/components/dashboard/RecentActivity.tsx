import { recentActivity } from '../../lib/dashboardData';

export function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-secondary">🔔 Recent Activity</h3>
        <a href="#" className="text-primary hover:text-primary/80 text-sm font-bold transition-colors">
          View All →
        </a>
      </div>
      <div className="space-y-3">
        {recentActivity.map((activity) => (
          <div
            key={activity.detail}
            className={`${activity.color} rounded-xl p-3 border-l-4 hover:shadow-sm transition-all duration-300`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{activity.icon}</span>
              <p className="font-bold text-secondary text-sm">{activity.action}</p>
              <span className="text-xs text-gray-500 ml-auto whitespace-nowrap">{activity.time}</span>
            </div>
            <p className="text-sm text-gray-600 ml-8">{activity.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
