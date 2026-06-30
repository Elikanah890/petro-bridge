import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import ServiceList from './ServiceList';
import ServiceDetail from './ServiceDetail';
import ServiceComparison from './ServiceComparison';

function Services() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('services.pageTitle', 'Our Services | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('services.metaDescription', 'Comprehensive petroleum logistics coordination services — carrier qualification, dispatch coordination, depot management, shipment monitoring, delivery verification, and analytics.')} />
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
                {t('services.heroLabel', 'What We Do')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('services.heroTitle', 'Our Services')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('services.heroSubtitle', 'Comprehensive petroleum logistics coordination — from carrier qualification and dispatch planning to real-time monitoring, delivery verification, and advanced analytics. Every service designed to give you complete control, visibility, and peace of mind.')}
              </p>
            </motion.div>
          </div>
        </section>
        <ServiceList />
        <ServiceDetail />
        <ServiceComparison />
      </PageTransition>
    </>
  );
}

export default Services;
