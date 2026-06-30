import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import CompanyStory from './CompanyStory';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import FounderMessage from './FounderMessage';
import BusinessStructure from './BusinessStructure';
import OperatingTerritory from './OperatingTerritory';
import Milestones from './Milestones';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('about.pageTitle', 'About Petro Bridge Solutions | Tanzania Petroleum Logistics')}</title>
        <meta name="description" content={t('about.metaDescription', 'Learn about Petro Bridge Solutions — Tanzania\'s premier petroleum logistics coordination company. Our story, mission, values, and the founder behind East Africa\'s most trusted fuel logistics authority.')} />
      </Helmet>
      <PageTransition>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-900 dark:bg-navy-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(10,22,40,0.6),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
                {t('about.heroLabel', 'About Us')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('about.heroTitle', 'About Petro Bridge Solutions')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('about.heroSubtitle', 'Bridging the gap between fuel suppliers, transporters, and customers through professional logistics coordination, cutting-edge technology, and an unwavering commitment to operational excellence.')}
              </p>
            </motion.div>
          </div>
        </section>
        <CompanyStory />
        <MissionVision />
        <CoreValues />
        <FounderMessage />
        <BusinessStructure />
        <OperatingTerritory />
        <Milestones />
      </PageTransition>
    </>
  );
}

export default About;
