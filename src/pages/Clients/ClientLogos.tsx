import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { clients } from '@/data/clients';

function ClientLogos() {
  const { t } = useTranslation();

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
            {t('clients.logosTitle', 'Trusted By Industry Leaders')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('clients.logosSubtitle', 'Over 35 enterprise clients across six industries trust Petro Bridge Solutions for their petroleum logistics coordination.')}
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 flex items-center justify-center h-32 hover:border-gold-500/30 transition-colors"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[80%] object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['TotalEnergies', 'Oryx Energies', 'Engen', 'Puma Energy', 'GAPCO', 'BP Tanzania', 'Bakhresa Group', 'Tanzania Railways'].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
              className="bg-navy-50/50 dark:bg-navy-800/50 rounded-xl p-5 border border-navy-100/50 dark:border-navy-700/50 text-center"
            >
              <p className="text-navy-400 dark:text-navy-500 text-sm font-medium">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
