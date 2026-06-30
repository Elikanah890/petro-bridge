import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { footerLinks } from '@/data';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/helpers';
import { Container } from '@/components/shared/Container/Container';
import { Logo } from '@/components/shared/Logo/Logo';
import { SocialIcons } from '@/components/shared/SocialIcons/SocialIcons';
import type { FooterProps } from './Footer.types';

const legalLinks = [
  { label: 'footer.link_privacy', href: '/privacy-policy' },
  { label: 'footer.link_terms', href: '/terms-conditions' },
  { label: 'footer.link_sitemap', href: '/sitemap' },
];

export function Footer({ className }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className={cn('bg-navy-900 text-navy-100', className)}>
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="lg" onDark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              {t('footer.description')}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold-500" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-5">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  {t(group.title)}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-navy-200 transition-colors hover:text-gold-400"
                      >
                        {t(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.newsletter_title')}
            </h3>
            <p className="mb-4 text-sm text-navy-200">
              {t('footer.newsletter_text')}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t('footer.newsletter_placeholder')}
                  aria-label={t('footer.newsletter_placeholder')}
                  className="h-11 w-full rounded-lg border border-navy-700 bg-navy-800 pl-10 pr-3 text-sm text-white placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
                <button
                  type="submit"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gold-500 text-sm font-semibold text-navy-900 shadow-gold transition-colors hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                >
                  {submitted ? t('footer.newsletter_success').slice(0, 20) : t('footer.newsletter_button')}
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {submitted && (
                <p className="mt-2 text-xs text-gold-400">
                  {t('footer.newsletter_success')}
                </p>
            )}
          </div>
        </div>
      </Container>

      <div className="border-t border-navy-800">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-navy-300">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-navy-300 transition-colors hover:text-gold-400"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialIcons variant="solid" />
          </div>
        </Container>
      </div>
    </footer>
  );
}
