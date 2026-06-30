import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import ClientLogos from './ClientLogos';
import TestimonialsList from './TestimonialsList';
import Partnerships from './Partnerships';

function Clients() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('clients.pageTitle', 'Clients & Testimonials | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('clients.metaDescription', 'See who trusts Petro Bridge Solutions for petroleum logistics coordination — testimonials from Tanzania\'s leading petroleum, mining, government, and construction companies.')} />
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
                {t('clients.heroLabel', 'Trusted Partners')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('clients.heroTitle', 'Our Clients')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('clients.heroSubtitle', 'From Tanzania\'s largest oil marketing companies to remote mining operations, our clients trust us with their most critical logistics challenges. Read their stories of transformation.')}
              </p>
            </motion.div>
          </div>
        </section>
        <ClientLogos />
        <TestimonialsList />
        <Partnerships />
      </PageTransition>
    </>
  );
}

export default Clients;
