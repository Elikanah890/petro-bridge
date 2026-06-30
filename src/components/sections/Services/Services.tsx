import { useTranslation } from 'react-i18next';
import { Container, Section, SectionHeader } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { services } from '@/data';
import { cn } from '@/lib/helpers';
import { ServiceCard } from './ServiceCard';
import type { ServicesProps } from './Services.types';

export function Services({ className }: ServicesProps) {
  const { t } = useTranslation();

  return (
    <Section
      id="services"
      className={cn('bg-navy-50/50 dark:bg-navy-900', className)}
    >
      <Container>
        <SectionHeader
          label={t('services.label')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeInUp key={service.id} delay={index * 0.06} className="h-full">
              <ServiceCard service={service} index={index} />
            </FadeInUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
