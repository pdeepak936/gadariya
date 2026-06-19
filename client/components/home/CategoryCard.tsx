import { Card } from '../ui/Card';

export type Category = {
  name: string;
  icon: string;
  count: string;
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Card className="group cursor-pointer">
      <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="text-5xl md:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-secondary mb-1">{category.name}</h3>
        <p className="text-gray-500 text-sm">{category.count}</p>
        <p className="mt-4 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Shop now →
        </p>
      </div>
    </Card>
  );
}
