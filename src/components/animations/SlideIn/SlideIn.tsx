import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { SlideInProps } from './SlideIn.types';

export function SlideIn({
  children,
  className,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  once = true,
  distance = 40,
}: SlideInProps) {
  const offset = direction === 'left' ? -distance : distance;

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
