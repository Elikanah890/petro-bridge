import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { FadeInUpProps } from './FadeInUp.types';

export function FadeInUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  distance = 30,
}: FadeInUpProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
