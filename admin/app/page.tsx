'use client';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-secondary to-secondary/95 text-white shadow-lg overflow-y-auto">
        <div className="p-6 border-b border-white/20">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            👑 GADARIYA
          </h1>
          <p className="text-sm text-gray-300 mt-1">Admin Dashboard</p>
        </div>

        <nav className="mt-6">
          {[
            { name: 'Dashboard', icon: '📊', href: '/' },
            { name: 'Products', icon: '📦', href: '/products' },
            { name: 'Orders', icon: '🛍️', href: '/orders' },
            { name: 'Categories', icon: '📂', href: '/categories' },
            { name: 'Users', icon: '👥', href: '/users' },
            { name: 'Inventory', icon: '📦', href: '/inventory' },
            { name: 'Analytics', icon: '📈', href: '/analytics' },
            { name: 'Coupons', icon: '🎟️', href: '/coupons' },
            { name: 'Reports', icon: '📋', href: '/reports' },
            { name: 'Settings', icon: '⚙️', href: '/settings' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-200 hover:bg-white/10 transition border-l-4 border-transparent hover:border-primary"
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/20 to-transparent border-t border-white/20">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <p className="text-sm font-semibold">Admin Account</p>
            <p className="text-xs text-gray-300 mt-1">admin@gadariya.com</p>
            <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold transition">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white shadow-md">
          <div className="px-8 py-4 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary">📊 Dashboard</h2>
              <p className="text-gray-600 text-sm mt-1">Welcome back! Here's your business overview.</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-gray-100 hover:bg-gray-200 text-secondary px-4 py-2 rounded-lg transition font-semibold">
                🔔 Notifications
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition font-semibold">
                👤 Profile
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Revenue', value: '₹45,231', icon: '💰', trend: '+12.5%', color: 'from-green-400 to-green-600' },
              { title: 'Total Orders', value: '1,234', icon: '🛍️', trend: '+8.2%', color: 'from-blue-400 to-blue-600' },
              { title: 'Total Products', value: '567', icon: '📦', trend: '+2.1%', color: 'from-purple-400 to-purple-600' },
              { title: 'Total Customers', value: '2,891', icon: '👥', trend: '+5.3%', color: 'from-orange-400 to-orange-600' },
            ].map((stat) => (
              <div key={stat.title} className={`bg-gradient-to-br ${stat.color} rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition transform hover:scale-105`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-sm font-medium">{stat.title}</p>
                    <h3 className="text-3xl font-bold mt-3">{stat.value}</h3>
                    <p className="bg-white/20 text-white text-xs font-bold mt-3 px-3 py-1 rounded-full inline-block">{stat.trend}</p>
                  </div>
                  <span className="text-5xl opacity-80">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-secondary">📈 Sales Trend</h3>
                <select className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Last 3 Months</option>
                </select>
              </div>
              <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <p className="text-gray-400 text-lg font-semibold">📊 Chart Component</p>
                  <p className="text-gray-500 text-sm mt-2">Sales trend visualization will appear here</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-secondary mb-6">📌 Quick Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Conversion Rate', value: '3.45%', color: 'bg-blue-100' },
                  { label: 'Avg Order Value', value: '₹1,245', color: 'bg-green-100' },
                  { label: 'Pending Orders', value: '24', color: 'bg-yellow-100' },
                  { label: 'Active Users', value: '156', color: 'bg-purple-100' },
                ].map((stat, idx) => (
                  <div key={idx} className={`${stat.color} rounded-lg p-4 border-l-4 border-primary`}>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-secondary mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Products */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-secondary">⭐ Top Products</h3>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-bold">View All →</a>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Premium Shirt', sales: 234, revenue: '₹12,340', icon: '👔' },
                  { name: 'Classic Jeans', sales: 189, revenue: '₹9,450', icon: '👖' },
                  { name: 'Casual T-Shirt', sales: 156, revenue: '₹7,800', icon: '👕' },
                  { name: 'Formal Blazer', sales: 127, revenue: '₹6,350', icon: '🧥' },
                ].map((product, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{product.icon}</span>
                      <div>
                        <p className="font-bold text-secondary">{product.name}</p>
                        <p className="text-xs text-gray-600">{product.sales} sales</p>
                      </div>
                    </div>
                    <p className="font-bold text-primary">{product.revenue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-secondary">🔔 Recent Activity</h3>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-bold">View All →</a>
              </div>
              <div className="space-y-4">
                {[
                  { action: 'New Order', detail: 'Order #1242 from John Doe', time: '5 mins ago', icon: '🛍️', color: 'bg-blue-100' },
                  { action: 'Product Added', detail: 'New Summer Collection Added', time: '2 hours ago', icon: '📦', color: 'bg-green-100' },
                  { action: 'User Registration', detail: 'New user registered: Jane Smith', time: '4 hours ago', icon: '👤', color: 'bg-purple-100' },
                  { action: 'Payment Received', detail: 'Payment of ₹5,240 received', time: '6 hours ago', icon: '💰', color: 'bg-yellow-100' },
                ].map((activity, idx) => (
                  <div key={idx} className={`${activity.color} rounded-lg p-3 border-l-4 border-primary`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{activity.icon}</span>
                      <p className="font-bold text-secondary text-sm">{activity.action}</p>
                      <span className="text-xs text-gray-600 ml-auto">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-8">{activity.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-secondary">📋 Recent Orders</h3>
              <a href="#" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition font-semibold text-sm">
                View All Orders
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-100 to-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-secondary">Order ID</th>
                    <th className="px-6 py-3 text-left font-bold text-secondary">Customer</th>
                    <th className="px-6 py-3 text-left font-bold text-secondary">Items</th>
                    <th className="px-6 py-3 text-left font-bold text-secondary">Amount</th>
                    <th className="px-6 py-3 text-left font-bold text-secondary">Status</th>
                    <th className="px-6 py-3 text-left font-bold text-secondary">Date</th>
                    <th className="px-6 py-3 text-left font-bold text-secondary">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#ORD-001', customer: 'John Doe', items: 3, amount: '₹2,540', status: 'Delivered', date: '2024-06-13', icon: '👤' },
                    { id: '#ORD-002', customer: 'Jane Smith', items: 2, amount: '₹3,240', status: 'Shipped', date: '2024-06-12', icon: '👩' },
                    { id: '#ORD-003', customer: 'Bob Johnson', items: 5, amount: '₹1,890', status: 'Processing', date: '2024-06-11', icon: '👨' },
                    { id: '#ORD-004', customer: 'Alice Brown', items: 1, amount: '₹999', status: 'Pending', date: '2024-06-10', icon: '👸' },
                  ].map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-bold text-secondary">{order.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{order.icon}</span>
                          <span className="font-medium text-gray-700">{order.customer}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">{order.items} items</span>
                      </td>
                      <td className="px-6 py-4 font-bold text-primary">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 font-medium">{order.date}</td>
                      <td className="px-6 py-4">
                        <button className="text-primary hover:text-primary/80 font-bold transition">
                          View →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
