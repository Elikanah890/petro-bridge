import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import ProcessTimeline from './ProcessTimeline';
import ProcessFlowchart from './ProcessFlowchart';
import ProcessDemo from './ProcessDemo';

function HowWeWork() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('howWeWork.pageTitle', 'How We Work | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('howWeWork.metaDescription', 'Our proven five-step logistics coordination process — from needs assessment and carrier setup to live monitoring and continuous improvement. See how Petro Bridge delivers excellence.')} />
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
        <ProcessDemo />
      </PageTransition>
    </>
  );
}

export default HowWeWork;
