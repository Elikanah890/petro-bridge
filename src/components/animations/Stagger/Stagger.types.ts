import type { ReactNode } from 'react';

export interface StaggerProps {
  children?: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
}

export interface StaggerItemProps {
  children?: ReactNode;
  className?: string;
  distance?: number;
}
