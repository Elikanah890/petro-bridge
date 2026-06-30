import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { Button } from '@/components/ui';
import { cn } from '@/lib/helpers';
import type { AboutPreviewProps } from './AboutPreview.types';

export function AboutPreview({ className }: AboutPreviewProps) {
  const { t } = useTranslation();

  return (
    <Section id="about" className={cn('bg-white dark:bg-navy-950', className)}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <FadeInUp>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">
              {t('about.label')}
            </span>
            <h2 className="mt-3 sm:mt-4 text-2xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-3xl lg:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t('about.description')}
            </p>

            <div className="mt-10">
              <Button href="/about" variant="primary" size="lg" className="group w-full sm:w-auto">
                {t('about.learnMore')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  );
}
