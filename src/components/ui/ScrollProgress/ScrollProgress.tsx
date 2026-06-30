import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/helpers';
import type { ScrollProgressProps } from './ScrollProgress.types';

export function ScrollProgress({ className }: ScrollProgressProps) {
  const progress = useScrollProgress();

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-[150] h-1 bg-transparent',
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-gold-400 to-gold-600 shadow-gold transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
