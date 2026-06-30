import type { ReactNode } from 'react';

export interface SlideInProps {
  children?: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
}
