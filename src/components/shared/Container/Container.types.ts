import type { ElementType, ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}
