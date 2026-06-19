import { Card } from '../ui/Card';

export type Product = {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  badge: string;
  badgeColor?: 'red' | 'green' | 'orange' | 'blue';
};

const badgeStyles = {
  red: 'bg-red-500',
  green: 'bg-emerald-500',
  orange: 'bg-orange-500',
  blue: 'bg-blue-500',
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < full ? 'text-amber-400' : i === full && half ? 'text-amber-300' : 'text-gray-200'}`}
        >
          ★
        </span>
      ))}
      <span className="text-xs text-gray-500 ml-1 font-medium">{rating}</span>
    </div>
  );
}

export function ProductCard({
  product,
  actionLabel = 'Add to Cart',
  actionVariant = 'primary',
}: {
  product: Product;
  actionLabel?: string;
  actionVariant?: 'primary' | 'secondary';
}) {
  const badgeColor = product.badgeColor ?? 'red';

  return (
    <Card>
      <div className="relative bg-gradient-to-br from-primary/10 via-white to-accent/10 h-44 md:h-48 flex items-center justify-center text-6xl">
        {product.image}
        <span
          className={`absolute top-3 right-3 ${badgeStyles[badgeColor]} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md`}
        >
          {product.badge}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-secondary mb-2 line-clamp-1">{product.name}</h3>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2 mt-3 mb-4">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
          )}
        </div>
        <button
          className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
            actionVariant === 'primary'
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-secondary text-white hover:bg-secondary/90'
          }`}
        >
          {actionLabel}
        </button>
      </div>
    </Card>
  );
}
