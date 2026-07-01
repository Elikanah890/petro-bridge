import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

function ServiceDetail() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-navy-50 dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('services.detailTitle', 'Service Details')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('services.detailSubtitle', 'Explore each service in depth — features, benefits, and how they work together to provide seamless logistics coordination.')}
          </p>
        </motion.div>
        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={`${service.category}-detail`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className={`${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
                  {t(`services.${service.category}Label`, `Service 0${i + 1}`)}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 dark:text-white mb-3">
                  {t(`services.items.${i}.title`, service.title)}
                </h3>
                <p className="text-gold-600 dark:text-gold-500 font-medium mb-4">{t(`services.items.${i}.subtitle`, service.subtitle)}</p>
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-8">{t(`services.items.${i}.description`, service.description)}</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-navy-400 dark:text-navy-500 uppercase tracking-wider mb-4">
                      {t('services.features', 'Features')}
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((f: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-navy-700 dark:text-navy-300">
                          <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75" />
                          </svg>
                          {t(`services.items.${i}.features.${j}`, f)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-400 dark:text-navy-500 uppercase tracking-wider mb-4">
                      {t('services.benefits', 'Benefits')}
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gold-700 dark:text-gold-400">
                          <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                          </svg>
                          {t(`services.items.${i}.benefits.${j}`, b)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;
