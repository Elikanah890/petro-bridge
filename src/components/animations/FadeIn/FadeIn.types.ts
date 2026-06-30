import type { ReactNode } from 'react';

export interface FadeInProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}
