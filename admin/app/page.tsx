'use client';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-secondary text-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold">GADARIYA</h1>
          <p className="text-sm text-gray-400">Admin Dashboard</p>
        </div>

        <nav className="mt-8">
          {[
            { name: 'Dashboard', icon: '📊', href: '/' },
            { name: 'Products', icon: '📦', href: '/products' },
            { name: 'Orders', icon: '🛍️', href: '/orders' },
            { name: 'Categories', icon: '📂', href: '/categories' },
            { name: 'Users', icon: '👥', href: '/users' },
            { name: 'Reports', icon: '📈', href: '/reports' },
            { name: 'Settings', icon: '⚙️', href: '/settings' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-100 hover:bg-gray-700 transition"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white shadow-sm">
          <div className="px-8 py-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="text-secondary hover:text-primary">Notifications</button>
              <button className="text-secondary hover:text-primary">Profile</button>
              <button className="text-secondary hover:text-primary">Logout</button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Revenue', value: '₹45,231', icon: '💰', trend: '+12.5%' },
              { title: 'Total Orders', value: '1,234', icon: '🛍️', trend: '+8.2%' },
              { title: 'Total Products', value: '567', icon: '📦', trend: '+2.1%' },
              { title: 'Total Customers', value: '2,891', icon: '👥', trend: '+5.3%' },
            ].map((stat) => (
              <div key={stat.title} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                    <p className="text-green-600 text-sm mt-2">{stat.trend}</p>
                  </div>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
              <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                <p className="text-gray-400">Chart Component Placeholder</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Top Products</h3>
              <div className="space-y-4">
                {[
                  { name: 'Product 1', sales: 234, revenue: '₹12,340' },
                  { name: 'Product 2', sales: 189, revenue: '₹9,450' },
                  { name: 'Product 3', sales: 156, revenue: '₹7,800' },
                ].map((product) => (
                  <div key={product.name} className="flex justify-between items-center pb-3 border-b">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.sales} sales</p>
                    </div>
                    <p className="font-semibold">{product.revenue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow mt-6 p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Order ID</th>
                    <th className="px-4 py-2 text-left">Customer</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#ORD-001', customer: 'John Doe', amount: '₹2,540', status: 'Delivered', date: '2024-06-13' },
                    { id: '#ORD-002', customer: 'Jane Smith', amount: '₹3,240', status: 'Shipped', date: '2024-06-12' },
                    { id: '#ORD-003', customer: 'Bob Johnson', amount: '₹1,890', status: 'Processing', date: '2024-06-11' },
                  ].map((order) => (
                    <tr key={order.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{order.id}</td>
                      <td className="px-4 py-3">{order.customer}</td>
                      <td className="px-4 py-3">{order.amount}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{order.date}</td>
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
