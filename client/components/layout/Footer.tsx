const footerLinks = {
  Shop: ['New Arrivals', 'Best Sellers', 'Sale', 'Gift Cards'],
  Support: ['Contact Us', 'FAQs', 'Shipping Info', 'Returns'],
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">✨</span> GADARIYA
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Your destination for premium fashion, jewelry, and lifestyle products. Quality and style, delivered.
            </p>
            <div className="flex gap-4 mt-6">
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 text-lg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-primary transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2024 GADARIYA. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
