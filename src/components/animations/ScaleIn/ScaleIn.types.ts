import type { ReactNode } from 'react';

export interface ScaleInProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}
