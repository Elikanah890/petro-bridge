import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { TestimonialCardProps } from './Testimonials.types';

function getInitials(name: string) {
  return name
    .replace(/^(Dr\.|Eng\.|Mr\.|Mrs\.|Ms\.)\s*/i, '')
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-card-hover dark:border-navy-800 dark:bg-navy-900',
        className
      )}
    >
      <Quote
        className="absolute right-6 top-6 h-9 w-9 text-gold-500/15 transition-colors group-hover:text-gold-500/30"
        fill="currentColor"
      />

      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < testimonial.rating
                ? 'fill-gold-500 text-gold-500'
                : 'fill-navy-100 text-navy-100 dark:fill-navy-700 dark:text-navy-700'
            )}
          />
        ))}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
        “{testimonial.content}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-6 dark:border-navy-800">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400 dark:bg-navy-800">
          {getInitials(testimonial.name)}
        </span>
        <div>
          <p className="text-sm font-bold text-navy-900 dark:text-white">{testimonial.name}</p>
          <p className="text-xs text-navy-500 dark:text-navy-300">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
