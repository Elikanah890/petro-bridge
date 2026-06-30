import type { ReactNode } from 'react';

export interface FadeInUpProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
}
