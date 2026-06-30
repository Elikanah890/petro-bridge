import { cn } from '@/lib/helpers';
import type { ContainerProps } from './Container.types';

const sizeClasses = {
  narrow: 'max-w-4xl',
  default: 'max-w-7xl',
  wide: 'max-w-[88rem]',
  full: 'max-w-none',
};

export function Container({
  children,
  className,
  as: Tag = 'div',
  size = 'default',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
