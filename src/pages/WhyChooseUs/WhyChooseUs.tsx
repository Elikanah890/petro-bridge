import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { SEO } from '@/components/layout/SEO/SEO';
import { seoData } from '@/data/seo';
import { motion } from 'framer-motion';
import BenefitsList from './BenefitsList';

function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('whyUs.pageTitle', seoData.whyChooseUs.title)}
        description={t('whyUs.metaDescription', seoData.whyChooseUs.description)}
        keywords={seoData.whyChooseUs.keywords}
        canonical="/why-choose-us"
      />
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
      </PageTransition>
    </>
  );
}

export default WhyChooseUs;
