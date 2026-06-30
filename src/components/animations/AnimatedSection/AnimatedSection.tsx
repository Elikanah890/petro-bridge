import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/helpers';
import type { AnimatedSectionProps } from './AnimatedSection.types';

export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  id,
}: AnimatedSectionProps) {
  const options = useMemo(() => ({ threshold: 0.15, rootMargin: '-40px' }), []);
  const { ref, isIntersecting } = useIntersectionObserver(options);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isIntersecting
          ? { opacity: 1, y: 0 }
          : once
            ? { opacity: 0, y: 30 }
            : { opacity: 0, y: 30 }
      }
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
