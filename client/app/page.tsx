import { SectionCard } from '../components/ui/Card';
import { CategoryCard } from '../components/home/CategoryCard';
import { ProductCard } from '../components/home/ProductCard';
import { FeatureCard } from '../components/home/FeatureCard';
import { TestimonialCard } from '../components/home/TestimonialCard';
import { HeroSection } from '../components/home/HeroSection';
import { FlashSaleSection, NewsletterSection } from '../components/home/FlashSaleSection';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { products, categories, testimonials, features } from '../lib/homeData';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <HeroSection />

      <SectionCard
        emoji="📦"
        title="Featured Categories"
        subtitle="Explore our premium collection of products"
        className="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </SectionCard>

      <FlashSaleSection products={products.slice(0, 4)} />

      <SectionCard
        emoji="🆕"
        title="New Arrivals"
        subtitle="Latest products just added to our collection"
        className="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(4, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              actionLabel="View Details"
              actionVariant="secondary"
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard
        emoji="🎯"
        title="Why Choose GADARIYA?"
        className="bg-gradient-to-r from-primary/5 to-accent/5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </SectionCard>

      <SectionCard
        emoji="⭐"
        title="Customer Reviews"
        subtitle="What our happy customers say about us"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </SectionCard>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
