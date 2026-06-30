import { cn } from '@/lib/helpers';
import { Container } from '../Container/Container';
import type { SectionProps } from './Section.types';

export function Section({
  children,
  className,
  id,
  dark = false,
  muted = false,
  containerClassName,
  size = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 sm:py-20 lg:py-28',
        dark
          ? 'bg-navy-900 text-white'
          : muted
            ? 'bg-navy-50 text-navy-900 dark:bg-navy-950 dark:text-white'
            : 'bg-white text-navy-900 dark:bg-navy-900 dark:text-white',
        className
      )}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
