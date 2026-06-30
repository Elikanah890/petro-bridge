import { cn } from '@/lib/helpers';
import type { IconProps, IconSize } from './Icon.types';

const sizeClasses: Record<IconSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-7 w-7',
  xl: 'h-10 w-10',
};

export function Icon({ name, size = 'md', color, className, title }: IconProps) {
  const url = `/icons/${name}.svg`;

  return (
    <span
      role="img"
      aria-label={title ?? name}
      className={cn('inline-block shrink-0 bg-current', sizeClasses[size], className)}
      style={{
        color,
        WebkitMaskImage: `url("${url}")`,
        maskImage: `url("${url}")`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}
