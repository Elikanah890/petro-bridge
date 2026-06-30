import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { testimonials } from '@/data';
import { cn } from '@/lib/helpers';
import { TestimonialCard } from './TestimonialCard';
import type { TestimonialsProps } from './Testimonials.types';

export function Testimonials({ className }: TestimonialsProps) {
  const { t } = useTranslation();

  return (
    <Section
      id="testimonials"
      className={cn('bg-white dark:bg-navy-950', className)}
    >
      <Container>
        <SectionHeader
          label={t('testimonials.label')}
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeInUp key={testimonial.id} delay={index * 0.06} className="h-full">
              <TestimonialCard testimonial={testimonial} index={index} />
            </FadeInUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
