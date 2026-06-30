import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { benefits } from '@/data';
import { cn } from '@/lib/helpers';
import { WhyCard } from './WhyCard';
import type { WhyChooseUsProps } from './WhyChooseUs.types';

export function WhyChooseUs({ className }: WhyChooseUsProps) {
  const { t } = useTranslation();

  return (
    <Section id="why-us" className={cn('bg-white dark:bg-navy-950', className)}>
      <Container>
        <SectionHeader
          label={t('whyUs.label')}
          title={t('whyUs.title')}
          subtitle={t('whyUs.subtitle')}
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <FadeInUp key={benefit.id} delay={index * 0.05} className="h-full">
              <WhyCard benefit={benefit} index={index} />
            </FadeInUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
