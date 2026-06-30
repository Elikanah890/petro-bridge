import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { LoaderProps, LoaderSize } from './Loader.types';

const sizeClasses: Record<LoaderSize, string> = {
  sm: 'h-5 w-5',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
};

export function Loader({
  size = 'md',
  className,
  fullScreen = false,
  label,
}: LoaderProps) {
  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <Loader2
        className={cn('animate-spin text-gold-500', sizeClasses[size], className)}
        aria-hidden="true"
      />
      {label && (
        <span className="text-sm font-medium text-navy-500 dark:text-navy-300">
          {label}
        </span>
      )}
      <span className="sr-only">Loading</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[300] flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-navy-950/80">
        {spinner}
      </div>
    );
  }

  return spinner;
}
