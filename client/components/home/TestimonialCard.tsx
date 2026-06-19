import { Card } from '../ui/Card';

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card hover={false} className="h-full">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-200'}`}>
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed flex-1 italic">&ldquo;{testimonial.text}&rdquo;</p>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-2xl">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-bold text-secondary">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
