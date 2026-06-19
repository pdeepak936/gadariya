export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/80 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            ✨ New Summer Collection 2024
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-in-up">
            Discover Premium
            <span className="block text-primary mt-2">Fashion & Lifestyle</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
            Shop authentic fashion, jewelry, and lifestyle products curated for the modern you. Quality you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
              🛍️ Shop Now
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
              📦 Explore Categories
            </button>
          </div>
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { value: '10K+', label: 'Happy Customers' },
              { value: '500+', label: 'Products' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
