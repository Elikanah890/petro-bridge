import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function MissionVision() {
  const { t } = useTranslation();

  const cards = [
    {
      id: 'vision',
      title: t('about.visionTitle', 'VISION'),
      text: t('about.visionText', 'To be the most trusted petroleum logistics coordination authority in Tanzania and across the East African region — recognized by clients, transporters, and industry stakeholders for operational discipline, delivery reliability, and execution integrity.'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'mission',
      title: t('about.missionTitle', 'MISSION'),
      text: t('about.missionText', 'To coordinate petroleum logistics with structural precision and operational integrity — connecting clients with verified transporters, managing every stage of the delivery process under active supervision, and ensuring every shipment is executed, monitored, and confirmed under a structured coordination protocol.'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="mission" className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-white mb-4">
            {t('about.missionVisionHeading', 'Mission & Vision')}
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            {t('about.missionVisionSubtitle', 'The strategic direction that drives everything we do at Petro Bridge Solutions.')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group bg-navy-800/50 dark:bg-navy-800/80 border border-navy-700/50 rounded-2xl p-10 hover:border-gold-500/30 transition-colors duration-300"
            >
              <div className="text-gold-500 mb-6">{card.icon}</div>
              <div className="absolute top-0 left-0 w-1 h-16 bg-gold-500 rounded-full mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-navy-300 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
