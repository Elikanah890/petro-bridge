import type { Service } from '@/types/service.types';

export interface ServicesProps {
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  index?: number;
  className?: string;
}
