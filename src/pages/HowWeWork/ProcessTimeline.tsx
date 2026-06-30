import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/processSteps';

function ProcessTimeline() {
  const { t } = useTranslation();

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('process.timelineTitle', 'The 5-Step Process')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('process.timelineSubtitle', 'From initial consultation to continuous optimization, our structured methodology ensures consistent, high-quality logistics coordination for every client.')}
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-navy-200 dark:bg-navy-700" />
          <div className="space-y-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-start ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              >
                <div className={`flex items-start gap-6 pl-20 lg:pl-0 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start lg:[direction:ltr]'}`}>
                  <div className={`hidden lg:flex flex-col items-center ${i % 2 === 1 ? 'order-last' : ''}`}>
                    <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-2xl shadow-gold z-10">
                      {step.step}
                    </div>
                  </div>
                  <div className={`max-w-lg ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="flex lg:hidden w-12 h-12 rounded-xl bg-gold-500 items-center justify-center text-navy-900 font-bold text-xl mb-4 absolute left-4 top-0 z-10">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">{step.description}</p>
                  </div>
                </div>
                <div className={`bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <h4 className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-4">
                    {t('process.includes', 'What This Includes')}
                  </h4>
                  <ul className="space-y-3">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-navy-700 dark:text-navy-300">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;
