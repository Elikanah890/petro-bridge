import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { SEO } from '@/components/layout/SEO/SEO';
import { seoData } from '@/data/seo';
import { motion } from 'framer-motion';
import ProcessTimeline from './ProcessTimeline';
import ProcessFlowchart from './ProcessFlowchart';

function HowWeWork() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('howWeWork.pageTitle', seoData.howWeWork.title)}
        description={t('howWeWork.metaDescription', seoData.howWeWork.description)}
        keywords={seoData.howWeWork.keywords}
        canonical="/how-we-work"
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
                {t('howWeWork.heroLabel', 'Our Process')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('howWeWork.heroTitle', 'How We Work')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('howWeWork.heroSubtitle', 'A proven five-step process that takes you from logistics challenges to seamless coordination. Every step designed to deliver transparency, efficiency, and measurable results.')}
              </p>
            </motion.div>
          </div>
        </section>
        <ProcessTimeline />
        <ProcessFlowchart />
      </PageTransition>
    </>
  );
}

export default HowWeWork;
