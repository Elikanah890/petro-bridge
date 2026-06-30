import type { Statistic } from '@/types/form.types';

export interface StatisticsProps {
  className?: string;
}

export interface StatItemProps {
  stat: Statistic;
  index?: number;
  className?: string;
}
