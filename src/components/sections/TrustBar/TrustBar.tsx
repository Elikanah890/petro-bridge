import { useTranslation } from 'react-i18next';
import { Container } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { clients, testimonials } from '@/data';
import { cn } from '@/lib/helpers';
import type { TrustBarProps } from './TrustBar.types';

const companyNames = Array.from(
  new Set([...clients.map((c) => c.name), ...testimonials.map((t) => t.company)])
).slice(0, 6);

export function TrustBar({ className }: TrustBarProps) {
  const { t } = useTranslation();

  return (
    <section
      id="trust-bar"
      className={cn(
        'border-y border-navy-100 bg-navy-50/50 py-12 dark:border-navy-800 dark:bg-navy-900/60',
        className
      )}
    >
      <Container>
        <FadeInUp className="flex flex-col items-center">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-navy-400 dark:text-navy-300">
            {t('trustBar.title')}
          </p>

          <div className="grid w-full grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {companyNames.map((name) => (
              <div
                key={name}
                className="group flex items-center justify-center"
                title={name}
              >
                <span className="select-none text-center text-sm font-semibold uppercase leading-tight tracking-wide text-navy-400/70 grayscale transition-all duration-300 group-hover:text-navy-700 group-hover:grayscale-0 dark:text-navy-300/60 dark:group-hover:text-white">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
