import {
  ShieldCheck,
  Route,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/helpers';
import type { ServiceCardProps } from './Services.types';

const iconMap: Record<string, LucideIcon> = {
  'carrier-qualification': ShieldCheck,
  'dispatch-coordination': Route,
  'delivery-verification': ClipboardCheck,
  'analytics-reporting': BarChart3,
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const { t } = useTranslation();
  const Icon = iconMap[service.id] ?? ShieldCheck;

  return (
    <a
      href={`/services/${service.id}`}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-5 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-card-hover dark:border-navy-800 dark:bg-navy-900 dark:hover:border-gold-500',
        className
      )}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-300 group-hover:scale-x-100" />

      <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-gold-500/10 group-hover:text-gold-600 dark:bg-navy-800 dark:text-gold-400">
        <Icon className="h-7 w-7" strokeWidth={1.75} />
      </span>

      <h3 className="text-lg font-bold leading-snug text-navy-900 dark:text-white">
        {service.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-gold-600 dark:text-gold-400">
        {service.subtitle}
      </p>

      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-navy-500 dark:text-navy-300">
        {service.description}
      </p>

      <span className="mt-6 inline-flex items-center text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">
        {t('services.learnMore')}
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
}
