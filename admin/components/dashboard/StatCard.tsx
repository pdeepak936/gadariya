type StatCardProps = {
  title: string;
  value: string;
  icon: string;
  trend: string;
  color: string;
};

export function StatCard({ title, value, icon, trend, color }: StatCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-2xl shadow-lg p-6 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1 cursor-default`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          <p className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold mt-3 px-3 py-1 rounded-full inline-block">
            {trend} vs last month
          </p>
        </div>
        <span className="text-5xl opacity-70">{icon}</span>
      </div>
    </div>
  );
}
