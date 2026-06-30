import type { ElementType, ReactNode } from 'react';

export interface AnimatedSectionProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: ElementType;
  id?: string;
}
