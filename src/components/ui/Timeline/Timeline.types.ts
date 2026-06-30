import type { ReactNode } from 'react';

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  meta?: string;
  icon?: ReactNode;
}

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}
