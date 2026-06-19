import { navItems } from '../../lib/dashboardData';

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-secondary via-secondary to-secondary/90 text-white shadow-2xl flex flex-col relative">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-primary">👑</span> GADARIYA
        </h1>
        <p className="text-sm text-gray-400 mt-1">Admin Dashboard</p>
      </div>

      <nav className="flex-1 mt-4 pb-32 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 border-l-4 border-transparent hover:border-primary group"
          >
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent border-t border-white/10">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-sm font-semibold">Admin Account</p>
          <p className="text-xs text-gray-400 mt-1">admin@gadariya.com</p>
          <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
