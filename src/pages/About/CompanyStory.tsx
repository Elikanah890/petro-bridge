import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function CompanyStory() {
  const { t } = useTranslation();

  return (
    <section id="story" className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-6 text-center">
            {t('about.storyTitle', 'Our Story')}
          </h2>
          <div className="space-y-4 text-navy-600 dark:text-navy-300 leading-relaxed">
            <p>
              {t('about.storyP1', 'Petro Bridge Solutions was founded in 2018 by Petro, a petroleum logistics veteran with over 15 years of experience across East Africa. Having witnessed the persistent challenges that plagued Tanzania\'s petroleum downstream supply chain — fragmented transporter networks, limited shipment visibility, delivery disputes, and operational inefficiencies — Petro envisioned a new model for fuel logistics coordination.')}
            </p>
            <p>
              {t('about.storyP2', 'The company began operations with a small team of five logistics professionals in Dar es Salaam, focused on serving petroleum marketing companies struggling with carrier management. From those early days, we invested heavily in building a rigorous carrier qualification framework and developing proprietary technology for shipment tracking and verification.')}
            </p>
            <p>
              {t('about.storyP3', 'Today, Petro Bridge Solutions has grown into Tanzania\'s premier petroleum logistics coordination company. We serve over 35 enterprise clients across six industries, coordinate more than 500 million liters of fuel annually through a network of 150+ pre-qualified carriers, and maintain a 99.7% on-time delivery rate. Our team has expanded to over 45 logistics professionals operating from our 24/7 coordination center in Dar es Salaam.')}
            </p>
            <p>
              {t('about.storyP4', 'Our growth has been driven by a singular commitment: to professionalize petroleum logistics in Tanzania through technology, rigorous standards, and genuine partnership with our clients. We do not own trucks or fuel — we provide the coordination layer that connects suppliers, transporters, and end-users with transparency, accountability, and efficiency.')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyStory;
