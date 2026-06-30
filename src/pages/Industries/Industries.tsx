import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import IndustryList from './IndustryList';

function Industries() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('industries.pageTitle', 'Industries We Serve | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('industries.metaDescription', 'Petro Bridge Solutions serves petroleum marketers, mining, government, construction, manufacturing, and fuel retail stations with specialized logistics coordination for each sector.')} />
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
                {t('industries.heroLabel', 'Who We Serve')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('industries.heroTitle', 'Industries We Serve')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('industries.heroSubtitle', 'Tailored logistics coordination solutions for every sector that depends on reliable fuel supply. From petroleum marketing companies to mining operations, we understand the unique challenges of each industry.')}
              </p>
            </motion.div>
          </div>
        </section>
        <IndustryList />
      </PageTransition>
    </>
  );
}

export default Industries;
