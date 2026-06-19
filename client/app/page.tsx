export default function Home() {
  const products = [
    { id: 1, name: 'Premium Shirt', price: '₹1,299', rating: 4.5, image: '👔', badge: 'New' },
    { id: 2, name: 'Classic Jeans', price: '₹1,899', rating: 4.8, image: '👖', badge: 'Sale' },
    { id: 3, name: 'Casual T-Shirt', price: '₹599', rating: 4.3, image: '👕', badge: 'Hot' },
    { id: 4, name: 'Formal Blazer', price: '₹3,499', rating: 4.9, image: '🧥', badge: 'New' },
    { id: 5, name: 'Summer Dress', price: '₹1,599', rating: 4.6, image: '👗', badge: 'Hot' },
    { id: 6, name: 'Winter Hoodie', price: '₹1,299', rating: 4.7, image: '🧥', badge: 'Sale' },
    { id: 7, name: 'Silk Saree', price: '₹2,999', rating: 4.9, image: '🎀', badge: 'New' },
    { id: 8, name: 'Ethnic Kurta', price: '₹899', rating: 4.4, image: '👚', badge: 'Hot' },
  ];

  const categories = [
    { name: 'Mens Clothing', icon: '👔', count: '1,250 items' },
    { name: 'Womens Clothing', icon: '👗', count: '2,100 items' },
    { name: 'Jewelry', icon: '💍', count: '580 items' },
    { name: 'Shoes', icon: '👠', count: '920 items' },
    { name: 'Accessories', icon: '👜', count: '640 items' },
    { name: 'Under Garments', icon: '🧦', count: '1,100 items' },
  ];

  const testimonials = [
    { name: 'Priya Singh', text: 'Amazing quality products! Delivery was super fast.', rating: 5 },
    { name: 'Rajesh Kumar', text: 'Great prices and excellent customer service.', rating: 5 },
    { name: 'Anjali Patel', text: 'Best shopping experience! Will definitely order again.', rating: 4.5 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ✨ GADARIYA
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-secondary hover:text-primary font-medium transition">Home</a>
              <a href="#" className="text-secondary hover:text-primary font-medium transition">Shop</a>
              <a href="#" className="text-secondary hover:text-primary font-medium transition">Categories</a>
              <a href="#" className="text-secondary hover:text-primary font-medium transition">Cart (0)</a>
              <a href="#" className="text-secondary hover:text-primary font-medium transition">Account</a>
            </div>
            <button className="md:hidden bg-primary text-white px-4 py-2 rounded-lg">Menu</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-accent to-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🛍️ Welcome to GADARIYA
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Premium Fashion, Jewelry & Lifestyle Products at Unbeatable Prices
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition transform">
                🛒 Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
                📱 Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary mb-4 text-center">Featured Categories</h2>
          <p className="text-gray-600 text-center mb-12">Explore our premium collection of products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition transform cursor-pointer border border-gray-200"
              >
                <div className="text-6xl mb-4">{cat.icon}</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">{cat.name}</h3>
                <p className="text-gray-600">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Deals - Flash Sale */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-2">⚡ Today's Flash Sale</h2>
              <p className="text-gray-600">Limited time offers - up to 50% off!</p>
            </div>
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold animate-pulse">
              ⏰ Ends in 4:32:15
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
              >
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center text-6xl">
                  {product.image}
                  <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-secondary mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-yellow-500">★★★★★ {product.rating}</span>
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary mb-4 text-center">🆕 New Arrivals</h2>
          <p className="text-gray-600 text-center mb-12">Latest products just added to our collection</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden border border-gray-200"
              >
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center text-6xl">
                  {product.image}
                  <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-secondary mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-yellow-500">★★★★★ {product.rating}</span>
                  </div>
                  <button className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Why Choose GADARIYA?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚚', title: 'Free Shipping', desc: 'On orders above ₹500' },
              { icon: '✅', title: '100% Original', desc: 'Authentic products guaranteed' },
              { icon: '💰', title: 'Best Prices', desc: 'Competitive rates everyday' },
              { icon: '🛡️', title: 'Secure Checkout', desc: 'Safe & encrypted payments' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center border-l-4 border-primary">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary mb-4 text-center">⭐ Customer Reviews</h2>
          <p className="text-gray-600 text-center mb-12">What our happy customers say about us</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-secondary">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">📧 Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 opacity-90">Get exclusive deals, new arrivals & special offers delivered to your inbox!</p>
          
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-6 py-3 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">✨ GADARIYA</h3>
              <p className="text-gray-400">Premium fashion & lifestyle products delivered to your doorstep</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Returns & Refunds</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="text-center mb-6">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-gray-700 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">f</a>
                <a href="#" className="bg-gray-700 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">𝕏</a>
                <a href="#" className="bg-gray-700 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">📷</a>
                <a href="#" className="bg-gray-700 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">▶</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2024 GADARIYA. All rights reserved. | Made with ❤️ for fashion lovers</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
