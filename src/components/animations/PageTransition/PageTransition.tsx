import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { PageTransitionProps } from './PageTransition.types';

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
