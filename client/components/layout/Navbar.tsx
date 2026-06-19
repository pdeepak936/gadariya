'use client';

import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'Sale', href: '#sale' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#" className="text-2xl font-bold text-secondary flex items-center gap-2">
            <span className="text-primary">✨</span> GADARIYA
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-gray-600 hover:text-primary transition-colors" aria-label="Search">
              🔍
            </button>
            <button className="p-2 text-gray-600 hover:text-primary transition-colors relative" aria-label="Cart">
              🛒
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <button className="px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
              Sign In
            </button>
          </div>

          <button
            className="md:hidden p-2 text-secondary text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-600 hover:text-primary font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
