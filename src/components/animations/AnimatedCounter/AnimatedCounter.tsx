import { useEffect, useRef, useState } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { cn } from '@/lib/helpers';
import type { AnimatedCounterProps } from './AnimatedCounter.types';

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  className,
  once = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const factor = Math.pow(10, decimals);
  const rawCount = useCounter(Math.round(value * factor), duration * 1000, inView);
  const display = (rawCount / factor).toFixed(decimals);
  const formatted = decimals === 0 ? Number(display).toLocaleString() : display;

  const number = (
    <span ref={ref} className={cn('tabular-nums', !label && className)}>
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
