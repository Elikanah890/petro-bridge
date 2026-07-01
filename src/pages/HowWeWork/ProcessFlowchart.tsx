import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function ProcessFlowchart() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-white mb-4">
            {t('process.flowchartTitle', 'Process Flow')}
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            {t('process.flowchartSubtitle', 'A visual overview of how our logistics coordination process flows from initial engagement to ongoing optimization.')}
          </p>
        </motion.div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-navy-800/80 dark:bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center h-full hover:border-gold-500/40 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-gold-500 font-bold text-xl">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t(`process.flowSteps.${i}.title`, ['Needs Assessment', 'Carrier Setup', 'Platform Config', 'Go Live', 'Optimize'][i])}
                  </h3>
                  <p className="text-navy-400 text-sm">
                    {t(`process.flowSteps.${i}.description`, ['Understand your logistics requirements and design custom solution', 'Select and integrate qualified carriers into your network', 'Configure dashboards, alerts, and integrations to your needs', 'Launch operations with 24/7 monitoring and support', 'Continuous reporting, analytics, and performance improvement'][i])}
                  </p>
                </div>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gold-500 z-10">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                {i < 4 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessFlowchart;
