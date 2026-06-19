export const stats = [
  { title: 'Total Revenue', value: '₹45,231', icon: '💰', trend: '+12.5%', color: 'from-emerald-400 to-emerald-600' },
  { title: 'Total Orders', value: '1,234', icon: '🛍️', trend: '+8.2%', color: 'from-blue-400 to-blue-600' },
  { title: 'Total Products', value: '567', icon: '📦', trend: '+2.1%', color: 'from-purple-400 to-purple-600' },
  { title: 'Total Customers', value: '2,891', icon: '👥', trend: '+5.3%', color: 'from-orange-400 to-orange-600' },
];

export const quickStats = [
  { label: 'Conversion Rate', value: '3.45%', color: 'bg-blue-50 border-blue-400' },
  { label: 'Avg Order Value', value: '₹1,245', color: 'bg-emerald-50 border-emerald-400' },
  { label: 'Pending Orders', value: '24', color: 'bg-amber-50 border-amber-400' },
  { label: 'Active Users', value: '156', color: 'bg-purple-50 border-purple-400' },
];

export const topProducts = [
  { name: 'Premium Shirt', sales: 234, revenue: '₹12,340', icon: '👔' },
  { name: 'Classic Jeans', sales: 189, revenue: '₹9,450', icon: '👖' },
  { name: 'Casual T-Shirt', sales: 156, revenue: '₹7,800', icon: '👕' },
  { name: 'Formal Blazer', sales: 127, revenue: '₹6,350', icon: '🧥' },
];

export const recentActivity = [
  { action: 'New Order', detail: 'Order #1242 from John Doe', time: '5 mins ago', icon: '🛍️', color: 'bg-blue-50 border-blue-400' },
  { action: 'Product Added', detail: 'New Summer Collection Added', time: '2 hours ago', icon: '📦', color: 'bg-emerald-50 border-emerald-400' },
  { action: 'User Registration', detail: 'New user registered: Jane Smith', time: '4 hours ago', icon: '👤', color: 'bg-purple-50 border-purple-400' },
  { action: 'Payment Received', detail: 'Payment of ₹5,240 received', time: '6 hours ago', icon: '💰', color: 'bg-amber-50 border-amber-400' },
];

export const recentOrders = [
  { id: '#ORD-001', customer: 'John Doe', items: 3, amount: '₹2,540', status: 'Delivered', date: '2024-06-13', icon: '👤' },
  { id: '#ORD-002', customer: 'Jane Smith', items: 2, amount: '₹3,240', status: 'Shipped', date: '2024-06-12', icon: '👩' },
  { id: '#ORD-003', customer: 'Bob Johnson', items: 5, amount: '₹1,890', status: 'Processing', date: '2024-06-11', icon: '👨' },
  { id: '#ORD-004', customer: 'Alice Brown', items: 1, amount: '₹999', status: 'Pending', date: '2024-06-10', icon: '👸' },
];

export const salesData = [
  { month: 'Jan', sales: 4200 },
  { month: 'Feb', sales: 3800 },
  { month: 'Mar', sales: 5100 },
  { month: 'Apr', sales: 4600 },
  { month: 'May', sales: 6200 },
  { month: 'Jun', sales: 5800 },
];

export const navItems = [
  { name: 'Dashboard', icon: '📊', href: '/' },
  { name: 'Products', icon: '📦', href: '/products' },
  { name: 'Orders', icon: '🛍️', href: '/orders' },
  { name: 'Categories', icon: '📂', href: '/categories' },
  { name: 'Users', icon: '👥', href: '/users' },
  { name: 'Inventory', icon: '📋', href: '/inventory' },
  { name: 'Analytics', icon: '📈', href: '/analytics' },
  { name: 'Coupons', icon: '🎟️', href: '/coupons' },
  { name: 'Reports', icon: '📄', href: '/reports' },
  { name: 'Settings', icon: '⚙️', href: '/settings' },
];

export type OrderStatus = 'Delivered' | 'Shipped' | 'Processing' | 'Pending';

export const statusStyles: Record<OrderStatus, string> = {
  Delivered: 'bg-emerald-100 text-emerald-800',
  Shipped: 'bg-blue-100 text-blue-800',
  Processing: 'bg-amber-100 text-amber-800',
  Pending: 'bg-gray-100 text-gray-800',
};
