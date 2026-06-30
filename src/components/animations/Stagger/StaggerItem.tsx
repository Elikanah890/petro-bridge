import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { StaggerItemProps } from './Stagger.types';

export function StaggerItem({
  children,
  className,
  distance = 24,
}: StaggerItemProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}
