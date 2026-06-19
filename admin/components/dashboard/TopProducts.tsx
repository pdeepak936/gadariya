import { topProducts } from '../../lib/dashboardData';

export function TopProducts() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-secondary">⭐ Top Products</h3>
        <a href="#" className="text-primary hover:text-primary/80 text-sm font-bold transition-colors">
          View All →
        </a>
      </div>
      <div className="space-y-3">
        {topProducts.map((product, idx) => (
          <div
            key={product.name}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-sm transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-400 w-5">#{idx + 1}</span>
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{product.icon}</span>
              <div>
                <p className="font-bold text-secondary">{product.name}</p>
                <p className="text-xs text-gray-500">{product.sales} sales</p>
              </div>
            </div>
            <p className="font-bold text-primary">{product.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
