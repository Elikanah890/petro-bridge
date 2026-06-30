import {
  Droplets,
  Mountain,
  Landmark,
  HardHat,
  Factory,
  Fuel,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { IndustryCardProps } from './Industries.types';

const iconMap: Record<string, LucideIcon> = {
  petroleum: Droplets,
  mining: Mountain,
  government: Landmark,
  construction: HardHat,
  manufacturing: Factory,
  'fuel-stations': Fuel,
};

export function IndustryCard({ industry, className }: IndustryCardProps) {
  const Icon = iconMap[industry.id] ?? Droplets;

  return (
    <a
      href={`/industries/${industry.id}`}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500 hover:shadow-card-hover dark:border-navy-800 dark:bg-navy-900',
        className
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-transform duration-300 group-hover:scale-105 dark:bg-navy-800">
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <ArrowUpRight className="h-5 w-5 text-navy-300 transition-all duration-300 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <h3 className="text-lg font-bold leading-snug text-navy-900 dark:text-white">
        {industry.title}
      </h3>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-navy-500 dark:text-navy-300">
        {industry.description}
      </p>
    </a>
  );
}
