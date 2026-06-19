export function TopBar() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
      <div className="px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">📊 Dashboard</h2>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Here&apos;s your business overview.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-50 hover:bg-gray-100 text-secondary px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm border border-gray-200 hover:shadow-md">
            🔔 Notifications
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm hover:shadow-lg hover:scale-105">
            👤 Profile
          </button>
        </div>
      </div>
    </div>
  );
}
