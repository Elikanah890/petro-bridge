import type { ReactNode } from 'react';

export interface GridProps {
  children?: ReactNode;
  className?: string;
  cols?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}
