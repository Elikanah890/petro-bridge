import { AnimatedCounter } from '@/components/animations';
import { cn } from '@/lib/helpers';
import type { StatItemProps } from './Statistics.types';

export function StatItem({ stat, className }: StatItemProps) {
  const decimals = Number.isInteger(stat.value) ? 0 : 1;

  return (
    <div
      className={cn(
        'flex flex-col items-center px-4 py-6 text-center sm:items-start sm:text-left',
        className
      )}
    >
      <div className="flex items-baseline text-4xl font-bold tracking-tight text-gold-600 dark:text-gold-400 sm:text-5xl">
        {stat.prefix && <span>{stat.prefix}</span>}
        <AnimatedCounter value={stat.value} decimals={decimals} duration={2} />
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <p className="mt-3 text-sm font-medium leading-snug text-navy-600 dark:text-navy-200">
        {stat.label}
      </p>
    </div>
  );
}
