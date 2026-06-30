import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Partnerships() {
  const { t } = useTranslation();

  const partnerships = [
    {
      name: 'EWURA',
      desc: t('clients.partnership.ewura', 'Registered and compliant logistics coordinator operating under the regulatory framework of the Energy and Water Utilities Regulatory Authority of Tanzania.'),
    },
    {
      name: t('clients.partnership.carrierTitle', 'Carrier Network'),
      desc: t('clients.partnership.carrierDesc', 'Strategic partnerships with 150+ pre-qualified petroleum transporters across all Tanzanian regions, ensuring capacity and coverage at scale.'),
    },
    {
      name: t('clients.partnership.techTitle', 'Technology Partners'),
      desc: t('clients.partnership.techDesc', 'Collaboration with leading GPS/IoT providers, cloud infrastructure partners, and petroleum industry software platforms to deliver integrated solutions.'),
    },
    {
      name: t('clients.partnership.industryTitle', 'Industry Associations'),
      desc: t('clients.partnership.industryDesc', 'Active member of Tanzanian petroleum industry associations, contributing to the development of logistics standards and best practices for the sector.'),
    },
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
            {t('clients.partnershipTitle', 'Partnerships & Affiliations')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('clients.partnershipSubtitle', 'Strategic relationships that strengthen our ability to deliver world-class logistics coordination across Tanzania.')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partnerships.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 hover:border-gold-500/20 transition-all"
            >
              <h3 className="font-bold text-lg text-navy-900 dark:text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
                </svg>
                {p.name}
              </h3>
              <p className="text-navy-600 dark:text-navy-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partnerships;
