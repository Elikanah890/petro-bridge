import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import OnboardingProcess from './OnboardingProcess';
import Checklist from './Checklist';
import { Button } from '@/components/ui/Button';

function GettingStarted() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('gettingStarted.pageTitle', 'Getting Started | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('gettingStarted.metaDescription', 'Ready to transform your fuel logistics? Follow our step-by-step onboarding guide to get started with Petro Bridge Solutions — Tanzania\'s petroleum logistics coordination authority.')} />
      </Helmet>
      <PageTransition>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-900 dark:bg-navy-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
                {t('gettingStarted.heroLabel', 'Begin Your Journey')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('gettingStarted.heroTitle', 'Getting Started')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('gettingStarted.heroSubtitle', 'Transform your petroleum logistics operations in just a few simple steps. Our onboarding process is designed for speed, clarity, and minimal disruption to your ongoing operations.')}
              </p>
            </motion.div>
          </div>
        </section>
        <OnboardingProcess />
        <Checklist />
        <section className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('gettingStarted.ctaTitle', 'Ready to Get Started?')}
              </h2>
              <p className="text-lg text-navy-300 mb-8">
                {t('gettingStarted.ctaDesc', 'Our team is ready to assess your needs and design a custom logistics coordination solution. Take the first step today.')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button variant="gold" size="lg">
                    {t('gettingStarted.contactUs', 'Contact Our Team')}
                  </Button>
                </a>
                <a href="/services">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    {t('gettingStarted.exploreServices', 'Explore Services')}
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default GettingStarted;
