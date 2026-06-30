import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/helpers';
import type { ParallaxProps } from './Parallax.types';

export function Parallax({ children, className, speed = 0.2 }: ParallaxProps) {
  const offset = useParallax(speed);

  return (
    <motion.div
      className={cn('will-change-transform', className)}
      style={{ y: offset }}
    >
      {children}
    </motion.div>
  );
}
