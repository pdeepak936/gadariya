export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">GADARIYA</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-secondary hover:text-primary">Home</a>
              <a href="#" className="text-secondary hover:text-primary">Shop</a>
              <a href="#" className="text-secondary hover:text-primary">Cart</a>
              <a href="#" className="text-secondary hover:text-primary">Account</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
              Welcome to GADARIYA
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium Fashion, Jewelry & Lifestyle Products
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-10">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Clothing', icon: '👕' },
              { name: 'Jewelry', icon: '💍' },
              { name: 'Shoes', icon: '👠' },
              { name: 'Accessories', icon: '👜' },
            ].map((cat) => (
              <div
                key={cat.name}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition cursor-pointer text-center"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-lg font-semibold text-secondary">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">GADARIYA</h3>
              <p className="text-gray-400">Premium fashion & lifestyle products</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GADARIYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
