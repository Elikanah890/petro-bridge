import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { statistics } from '@/data';
import { cn } from '@/lib/helpers';
import { StatItem } from './StatItem';
import type { StatisticsProps } from './Statistics.types';

export function Statistics({ className }: StatisticsProps) {
  const { t } = useTranslation();

  return (
    <Section
      id="statistics"
      className={cn('bg-navy-50/60 dark:bg-navy-900', className)}
    >
      <Container>
        <SectionHeader label="By The Numbers" title={t('statistics.title')} />

        <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-navy-100 bg-navy-100 dark:border-navy-800 dark:bg-navy-800 md:grid-cols-4">
          {statistics.map((stat, index) => (
            <FadeInUp
              key={stat.id}
              delay={index * 0.06}
              className="bg-white dark:bg-navy-950"
            >
              <StatItem stat={stat} index={index} />
            </FadeInUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
