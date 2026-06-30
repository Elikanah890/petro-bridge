import {
  ClipboardList,
  Network,
  Settings2,
  Activity,
  LineChart,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { processSteps } from '@/data';
import { cn } from '@/lib/helpers';
import type { ProcessPreviewProps } from './ProcessPreview.types';

const iconMap: Record<string, LucideIcon> = {
  'step-1': ClipboardList,
  'step-2': Network,
  'step-3': Settings2,
  'step-4': Activity,
  'step-5': LineChart,
};

export function ProcessPreview({ className }: ProcessPreviewProps) {
  const { t } = useTranslation();

  return (
    <Section id="process" className={cn('bg-white dark:bg-navy-950', className)}>
      <Container>
        <SectionHeader
          label="Our Process"
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />

        <div className="relative mt-16">
          <div className="absolute left-7 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-10 lg:space-y-16">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.id] ?? ClipboardList;
              const isLeft = index % 2 === 0;

              return (
                <FadeInUp key={step.id} delay={index * 0.08}>
                  <div className="grid grid-cols-[auto_1fr] items-start gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12">
                    <div className="flex justify-center lg:col-start-2 lg:row-start-1">
                      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-900 text-lg font-bold text-gold-400 shadow-gold">
                        {step.step}
                      </span>
                    </div>

                    <div
                      className={cn(
                        'rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover dark:border-navy-800 dark:bg-navy-900',
                        isLeft
                          ? 'lg:col-start-1 lg:row-start-1 lg:mr-2 lg:text-right'
                          : 'lg:col-start-3 lg:row-start-1 lg:ml-2 lg:text-left'
                      )}
                    >
                      <div
                        className={cn(
                          'mb-3 flex items-center gap-3',
                          isLeft && 'lg:flex-row-reverse'
                        )}
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-gold-400">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <h3 className="text-base font-bold leading-snug text-navy-900 dark:text-white sm:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-navy-500 dark:text-navy-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
