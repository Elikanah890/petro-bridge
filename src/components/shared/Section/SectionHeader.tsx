import { cn } from '@/lib/helpers';
import type { SectionHeaderProps } from './Section.types';

export function SectionHeader({
  label,
  title,
  subtitle,
  center = false,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        center && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-display-sm',
          dark ? 'text-white' : 'text-navy-900 dark:text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-navy-100' : 'text-navy-600 dark:text-navy-200'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
