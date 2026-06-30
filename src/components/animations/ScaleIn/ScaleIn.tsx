import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { ScaleInProps } from './ScaleIn.types';

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: ScaleInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
