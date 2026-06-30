import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import BlogList from './BlogList';
import DownloadCenter from './DownloadCenter';

function Resources() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('resources.pageTitle', 'Resources | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('resources.metaDescription', 'Access petroleum logistics insights, articles, case studies, and downloadable resources from Petro Bridge Solutions — Tanzania\'s logistics coordination authority.')} />
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
                {t('resources.heroLabel', 'Knowledge Center')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('resources.heroTitle', 'Resources')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('resources.heroSubtitle', 'Articles, guides, case studies, and downloadable resources to help you optimize your petroleum logistics operations. Stay informed with insights from Tanzania\'s logistics coordination experts.')}
              </p>
            </motion.div>
          </div>
        </section>
        <BlogList />
        <DownloadCenter />
      </PageTransition>
    </>
  );
}

export default Resources;
