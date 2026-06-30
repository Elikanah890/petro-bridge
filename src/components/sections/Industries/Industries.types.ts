import type { Industry } from '@/types/industry.types';

export interface IndustriesProps {
  className?: string;
}

export interface IndustryCardProps {
  industry: Industry;
  index?: number;
  className?: string;
}
