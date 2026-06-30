import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { StaggerProps } from './Stagger.types';

export function Stagger({
  children,
  className,
  staggerChildren = 0.12,
  delayChildren = 0,
  once = true,
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </motion.div>
  );
}
