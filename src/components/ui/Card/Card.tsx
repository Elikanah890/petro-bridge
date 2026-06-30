import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { CardProps } from './Card.types';

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8 lg:p-10',
};

export function Card({
  className,
  children,
  hover = false,
  padding = 'md',
  bordered = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { scale: 1.01, y: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn(
        'rounded-2xl bg-white text-navy-900 shadow-card',
        'dark:bg-navy-800 dark:text-white',
        bordered && 'border border-navy-100 dark:border-navy-700',
        hover && 'cursor-pointer transition-shadow duration-300 hover:shadow-card-hover',
        onClick && 'cursor-pointer',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
