import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
        hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

type SectionCardProps = {
  emoji?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionCard({ emoji, title, subtitle, children, className = '' }: SectionCardProps) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          {emoji && <span className="text-4xl md:text-5xl mb-3 block">{emoji}</span>}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-gray-500 mt-3 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
