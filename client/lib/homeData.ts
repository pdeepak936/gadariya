import type { Product } from '../components/home/ProductCard';
import type { Category } from '../components/home/CategoryCard';

export const categories: Category[] = [
  { name: 'Fashion & Apparel', icon: '👔', count: '120+ items' },
  { name: 'Jewelry & Accessories', icon: '💎', count: '85+ items' },
  { name: 'Footwear', icon: '👟', count: '64+ items' },
  { name: 'Home & Living', icon: '🏠', count: '92+ items' },
  { name: 'Beauty & Wellness', icon: '✨', count: '56+ items' },
  { name: 'Electronics', icon: '📱', count: '48+ items' },
];

export const products: Product[] = [
  { id: 1, name: 'Premium Cotton Shirt', price: '₹1,299', originalPrice: '₹1,899', rating: 4.8, image: '👔', badge: 'SALE', badgeColor: 'red' },
  { id: 2, name: 'Classic Denim Jeans', price: '₹1,599', originalPrice: '₹2,199', rating: 4.6, image: '👖', badge: 'HOT', badgeColor: 'orange' },
  { id: 3, name: 'Gold Pendant Necklace', price: '₹3,499', originalPrice: '₹4,999', rating: 4.9, image: '💎', badge: '-30%', badgeColor: 'red' },
  { id: 4, name: 'Leather Sneakers', price: '₹2,199', originalPrice: '₹2,899', rating: 4.7, image: '👟', badge: 'SALE', badgeColor: 'red' },
  { id: 5, name: 'Silk Saree Collection', price: '₹4,999', rating: 4.9, image: '🥻', badge: 'NEW', badgeColor: 'green' },
  { id: 6, name: 'Designer Handbag', price: '₹2,799', rating: 4.5, image: '👜', badge: 'NEW', badgeColor: 'green' },
  { id: 7, name: 'Smart Watch Pro', price: '₹5,499', rating: 4.8, image: '⌚', badge: 'TRENDING', badgeColor: 'blue' },
  { id: 8, name: 'Organic Skincare Set', price: '₹899', rating: 4.4, image: '🧴', badge: 'NEW', badgeColor: 'green' },
];

export const features = [
  { icon: '🚚', title: 'Free Shipping', description: 'On orders above ₹999 across India' },
  { icon: '🔒', title: 'Secure Payment', description: '100% secure & encrypted transactions' },
  { icon: '↩️', title: 'Easy Returns', description: '7-day hassle-free return policy' },
  { icon: '💬', title: '24/7 Support', description: 'Dedicated customer support team' },
];

export const testimonials = [
  { name: 'Priya Sharma', role: 'Verified Buyer', rating: 5, text: 'Amazing quality products! The silk saree I ordered exceeded my expectations. Fast delivery and beautiful packaging.', avatar: '👩' },
  { name: 'Rahul Mehta', role: 'Verified Buyer', rating: 5, text: 'Best online shopping experience. The jewelry collection is stunning and authentic. Will definitely shop again!', avatar: '👨' },
  { name: 'Ananya Patel', role: 'Verified Buyer', rating: 4, text: 'Love the variety and quality. Customer service was very helpful when I had questions about sizing. Highly recommend GADARIYA!', avatar: '👩‍💼' },
];
