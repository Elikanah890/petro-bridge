import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function TrustIndicators() {
  const { t } = useTranslation();

  const certifications = [
    { name: 'EWURA Registered', desc: 'Fully registered and compliant with the Energy and Water Utilities Regulatory Authority of Tanzania' },
    { name: 'OSHA Compliant', desc: 'Occupational safety and health standards compliance across all operations' },
    { name: 'TRA Tax Compliant', desc: 'Fully tax compliant with the Tanzania Revenue Authority' },
    { name: 'BRELA Registered', desc: 'Registered company with the Business Registrations and Licensing Agency of Tanzania' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('whyUs.trustTitle', 'Trust Indicators')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('whyUs.trustSubtitle', 'The numbers and credentials that demonstrate why Tanzania\'s leading companies trust Petro Bridge Solutions.')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-navy-900 dark:text-white text-center mb-8">
            {t('whyUs.certifications', 'Certifications & Registrations')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-navy-50 dark:bg-navy-800 rounded-xl p-6 border border-navy-100 dark:border-navy-700 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-navy-900 dark:text-white mb-2">{cert.name}</h4>
                <p className="text-navy-600 dark:text-navy-400 text-xs">{cert.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustIndicators;
