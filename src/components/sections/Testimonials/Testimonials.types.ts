import type { Testimonial } from '@/types/form.types';

export interface TestimonialsProps {
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
  className?: string;
}
