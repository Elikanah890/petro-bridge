import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { FadeInProps } from './FadeIn.types';

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
