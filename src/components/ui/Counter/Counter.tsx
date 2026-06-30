import { useCounter } from '@/hooks/useCounter';
import { cn } from '@/lib/helpers';
import type { CounterProps } from './Counter.types';

export function Counter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  className,
  start = true,
}: CounterProps) {
  const factor = Math.pow(10, decimals);
  const rawCount = useCounter(Math.round(end * factor), duration, start);
  const value = (rawCount / factor).toFixed(decimals);
  const formatted = decimals === 0 ? Number(value).toLocaleString() : value;

  const number = (
    <span className={cn('tabular-nums', !label && className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );

  if (!label) {
    return number;
  }

  return (
    <div className={cn('text-center', className)}>
      <div className="font-display text-display-sm font-bold tracking-tight text-navy-900 dark:text-white sm:text-5xl">
        {number}
      </div>
      <p className="mt-2 text-sm font-medium text-navy-500 dark:text-navy-300">
        {label}
      </p>
    </div>
  );
}
