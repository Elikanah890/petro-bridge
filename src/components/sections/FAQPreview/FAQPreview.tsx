import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { Button } from '@/components/ui';
import { faqs } from '@/data';
import { cn } from '@/lib/helpers';
import type { FAQPreviewProps } from './FAQPreview.types';

const topFaqs = faqs.slice(0, 5);

export function FAQPreview({ className }: FAQPreviewProps) {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(topFaqs[0]?.id ?? null);

  return (
    <Section id="faq" className={cn('bg-navy-50/50 dark:bg-navy-900', className)}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <FadeInUp className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">
              {t('faq.label')}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
              {t('faq.title')}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t('faq.subtitle')}
            </p>
            <div className="mt-8">
              <Button href="/faq" variant="outline" size="lg" className="group">
                {t('faq.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white dark:divide-navy-800 dark:border-navy-800 dark:bg-navy-950">
              {topFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-navy-50/60 dark:hover:bg-navy-900/60"
                    >
                      <span className="text-sm font-semibold text-navy-900 dark:text-white sm:text-base">
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                          isOpen
                            ? 'rotate-45 border-gold-500 bg-gold-500 text-navy-900'
                            : 'border-navy-200 text-navy-500 dark:border-navy-700 dark:text-navy-300'
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-navy-500 dark:text-navy-300">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  );
}
