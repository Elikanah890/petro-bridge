import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import BenefitsList from './BenefitsList';
import ComparisonTable from './ComparisonTable';
import TrustIndicators from './TrustIndicators';

function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('whyUs.pageTitle', 'Why Choose Petro Bridge | Petroleum Logistics Excellence')}</title>
        <meta name="description" content={t('whyUs.metaDescription', 'Discover why leading Tanzanian companies choose Petro Bridge Solutions — pre-qualified carriers, real-time tracking, cost optimization, regulatory compliance, and true partnership.')} />
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
                {t('whyUs.heroLabel', 'The Petro Bridge Difference')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('whyUs.heroTitle', 'Why Choose Petro Bridge')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('whyUs.heroSubtitle', 'Eight compelling reasons why Tanzania\'s leading petroleum companies, mining operations, and government agencies trust us with their fuel logistics coordination.')}
              </p>
            </motion.div>
          </div>
        </section>
        <BenefitsList />
        <ComparisonTable />
        <TrustIndicators />
      </PageTransition>
    </>
  );
}

export default WhyChooseUs;
