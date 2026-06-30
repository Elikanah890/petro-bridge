import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Mail, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { Button } from '@/components/ui';
import { cn } from '@/lib/helpers';
import type { NewsletterProps } from './Newsletter.types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter({ className }: NewsletterProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className={cn('px-4 py-16 sm:py-20', className)}>
      <Container>
        <FadeInUp>
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-[linear-gradient(135deg,#0A1628_0%,#0B1A33_60%,#1A3A5C_100%)] px-6 py-14 sm:px-12 lg:px-16">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-petrol-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-400">
                <Mail className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('newsletter.title')}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-100/75">
                {t('newsletter.subtitle')}
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm font-medium text-emerald-300"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    {t('newsletter.success')}
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-8"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="relative flex-1">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-300" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                          }}
                          placeholder={t('newsletter.placeholder')}
                          aria-label={t('newsletter.placeholder')}
                          aria-invalid={Boolean(error)}
                          className={cn(
                            'w-full rounded-xl border bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50',
                            error ? 'border-red-400/60' : 'border-white/15'
                          )}
                        />
                      </div>
                      <Button type="submit" variant="gold" size="lg" className="group shrink-0">
                        {t('newsletter.button')}
                        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Button>
                    </div>

                    {error && (
                      <p className="mt-3 text-left text-xs text-red-300 sm:text-center">{error}</p>
                    )}
                    <p className="mt-4 text-xs text-navy-100/50">{t('newsletter.privacy')}</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
