import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('notFound.pageTitle', '404 - Page Not Found | Petro Bridge Solutions')}</title>
      </Helmet>
      <div className="min-h-screen bg-navy-900 dark:bg-navy-950 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-8xl lg:text-9xl font-bold text-gold-500 mb-4">404</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            {t('notFound.title', 'Page Not Found')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-navy-300 mb-10 leading-relaxed"
          >
            {t('notFound.description', 'The page you\'re looking for doesn\'t exist or has been moved. Let\'s get you back on track to Tanzania\'s premier petroleum logistics coordination.')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="/">
              <Button variant="gold" size="lg">
                {t('notFound.goHome', 'Go Home')}
              </Button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-2 text-navy-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <span className="text-sm">{t('notFound.brand', 'Petro Bridge Solutions')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
