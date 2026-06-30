import {
  Award,
  Cpu,
  Network,
  TrendingDown,
  ShieldCheck,
  FileCheck,
  Eye,
  Handshake,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { WhyCardProps } from './WhyChooseUs.types';

const iconMap: Record<string, LucideIcon> = {
  expertise: Award,
  technology: Cpu,
  network: Network,
  cost: TrendingDown,
  reliability: ShieldCheck,
  compliance: FileCheck,
  visibility: Eye,
  partnership: Handshake,
};

export function WhyCard({ benefit, className }: WhyCardProps) {
  const Icon = iconMap[benefit.id] ?? Award;

  return (
    <div
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:border-gold-500/60 hover:shadow-card-hover dark:border-navy-800 dark:bg-navy-900',
        className
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-gold-500/10 group-hover:text-gold-600 dark:bg-navy-800 dark:text-gold-400">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        {benefit.metric && (
          <span className="text-2xl font-bold leading-none text-gold-600 dark:text-gold-400 sm:text-3xl">
            {benefit.metric}
          </span>
        )}
      </div>

      <h3 className="text-base font-bold leading-snug text-navy-900 dark:text-white sm:text-lg">
        {benefit.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-navy-300">
        {benefit.description}
      </p>
    </div>
  );
}
