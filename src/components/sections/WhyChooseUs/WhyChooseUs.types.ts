import type { Benefit } from '@/data/benefits';

export interface WhyChooseUsProps {
  className?: string;
}

export interface WhyCardProps {
  benefit: Benefit;
  index?: number;
  className?: string;
}
