'use client';

import { useEffect, useState } from 'react';
import { ProductCard, type Product } from './ProductCard';

function useCountdown(targetHours: number) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const end = Date.now() + targetHours * 60 * 60 * 1000;

    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetHours]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg">
        <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-white/80 mt-2 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

export function FlashSaleSection({ products }: { products: Product[] }) {
  const { hours, minutes, seconds } = useCountdown(8);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-accent via-red-500 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300 rounded-full blur-3xl" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div>
            <span className="text-4xl mb-2 block">⚡</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Flash Sale</h2>
            <p className="text-white/80 mt-2 text-lg">Limited time offers — grab them before they&apos;re gone!</p>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <CountdownUnit value={hours} label="Hours" />
            <span className="text-2xl font-bold text-white/60">:</span>
            <CountdownUnit value={minutes} label="Minutes" />
            <span className="text-2xl font-bold text-white/60">:</span>
            <CountdownUnit value={seconds} label="Seconds" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-amber-500 to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-4 block">📧</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/90 text-lg mb-8">
            Get exclusive deals, new arrivals, and style tips delivered straight to your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Subscribe ✨
            </button>
          </form>
          <p className="text-white/70 text-sm mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
