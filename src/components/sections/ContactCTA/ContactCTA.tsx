import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { Button } from '@/components/ui';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/helpers';
import type { ContactCTAProps } from './ContactCTA.types';

export function ContactCTA({ className }: ContactCTAProps) {
  const { t } = useTranslation();

  const contactItems = [
    {
      Icon: Phone,
      label: t('cta.callUs'),
      value: t('contact.phone_number'),
      href: `tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`,
    },
    {
      Icon: Mail,
      label: t('cta.emailUs'),
      value: t('contact.email_address'),
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      Icon: MapPin,
      label: t('cta.visitUs'),
      value: t('contact.address'),
      href: undefined,
    },
  ];

  return (
    <section
      id="contact"
      className={cn(
        'relative overflow-hidden bg-[linear-gradient(135deg,#060E1A_0%,#0A1628_55%,#0B1A33_100%)] px-4 py-20 sm:py-28',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-petrol-500/20 blur-[130px]" />

      <Container className="relative">
        <FadeInUp className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            {t('cta.label')}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-100/75 sm:text-lg">
            {t('cta.description')}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="gold" size="lg" className="group w-full shadow-gold sm:w-auto">
              {t('contact.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
              variant="outline"
              size="lg"
              className="w-full border-white/40 text-white hover:border-gold-500 hover:text-gold-400 sm:w-auto"
            >
              <Phone className="mr-2 h-4 w-4" />
              {t('contact.phone_number')}
            </Button>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.15} className="mt-16">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
            {contactItems.map(({ Icon, label, value, href }) => {
              const content = (
                <div className="flex h-full items-center gap-4 px-6 py-6 transition-colors hover:bg-white/5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
