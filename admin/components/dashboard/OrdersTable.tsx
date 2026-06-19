import { recentOrders, statusStyles, type OrderStatus } from '../../lib/dashboardData';

export function OrdersTable() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h3 className="text-xl font-bold text-secondary">📋 Recent Orders</h3>
        <a
          href="#"
          className="bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-sm text-center hover:shadow-lg hover:scale-105"
        >
          View All Orders
        </a>
      </div>
      <div className="overflow-x-auto -mx-2">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b-2 border-gray-200">
              {['Order ID', 'Customer', 'Items', 'Amount', 'Status', 'Date', 'Action'].map((col) => (
                <th key={col} className="px-4 py-3 text-left font-bold text-secondary text-sm">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors duration-200">
                <td className="px-4 py-4 font-bold text-secondary text-sm">{order.id}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{order.icon}</span>
                    <span className="font-medium text-gray-700 text-sm">{order.customer}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {order.items} items
                  </span>
                </td>
                <td className="px-4 py-4 font-bold text-primary text-sm">{order.amount}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold ${statusStyles[order.status as OrderStatus]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-500 text-sm font-medium">{order.date}</td>
                <td className="px-4 py-4">
                  <button className="text-primary hover:text-primary/80 font-bold transition-colors text-sm">
                    View →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
