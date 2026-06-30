import { ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { Button } from '@/components/ui';
import { cn } from '@/lib/helpers';
import type { AboutPreviewProps } from './AboutPreview.types';

const stats = [
  { value: '8+', label: 'Years of Expertise' },
  { value: '35+', label: 'Enterprise Clients' },
  { value: '500M+', label: 'Liters Coordinated' },
];

export function AboutPreview({ className }: AboutPreviewProps) {
  const { t } = useTranslation();

  return (
    <Section id="about" className={cn('bg-white dark:bg-navy-950', className)}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeInUp>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">
              About Us
            </span>
            <h2 className="mt-3 sm:mt-4 text-2xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-3xl lg:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t('about.description')}
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 border-t border-navy-100 pt-6 sm:pt-8 dark:border-navy-800">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl font-bold text-gold-600 dark:text-gold-400 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium leading-tight text-navy-400 dark:text-navy-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/about" variant="primary" size="lg" className="group w-full sm:w-auto">
                {t('about.learnMore')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-gold-500/30" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold-500/40 bg-[linear-gradient(150deg,#0A1628_0%,#0B1A33_55%,#1A3A5C_100%)] shadow-card-hover">
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(212,175,55,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.7) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                      <ShieldCheck className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Delivery Assurance</p>
                      <p className="text-xs text-navy-100/70">99.7% On-Time, Nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-8 top-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol-500/30 text-petrol-100">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Dar es Salaam, TZ</p>
                    <p className="text-xs text-navy-100/70">Nationwide Coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  );
}
