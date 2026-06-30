import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { industries } from '@/data';
import { cn } from '@/lib/helpers';
import { IndustryCard } from './IndustryCard';
import type { IndustriesProps } from './Industries.types';

export function Industries({ className }: IndustriesProps) {
  const { t } = useTranslation();

  return (
    <Section
      id="industries"
      className={cn('bg-navy-50/50 dark:bg-navy-900', className)}
    >
      <Container>
        <SectionHeader
          label="Sectors We Power"
          title={t('industries.title')}
          subtitle={t('industries.subtitle')}
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <FadeInUp key={industry.id} delay={index * 0.06} className="h-full">
              <IndustryCard industry={industry} index={index} />
            </FadeInUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
