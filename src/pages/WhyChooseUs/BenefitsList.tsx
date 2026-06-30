import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { benefits } from '@/data/benefits';
import { Counter } from '@/components/ui/Counter';

function BenefitsList() {
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
            {t('whyUs.benefitsTitle', '8 Reasons to Partner With Us')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('whyUs.benefitsSubtitle', 'Each benefit is backed by real results, proven processes, and a team dedicated to your logistics success.')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-4">{benefit.description}</p>
              {benefit.metric && (
                <div className="inline-flex items-center gap-1.5 bg-gold-500/10 rounded-lg px-3 py-1.5">
                  <span className="text-gold-600 font-bold text-lg">
                    <Counter end={parseFloat(benefit.metric.replace(/[^0-9.]/g, ''))} suffix={benefit.metric.replace(/[0-9.]/g, '')} />
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsList;
