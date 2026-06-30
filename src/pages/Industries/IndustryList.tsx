import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { industries } from '@/data/industries';

function IndustryList() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={`space-y-8 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div>
                  <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
                    {t('industries.industryLabel', `Industry 0${i + 1}`)}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 dark:text-white mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed text-lg">
                    {industry.description}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl p-6">
                    <h3 className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold mb-4">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      {t('industries.challenges', 'Challenges')}
                    </h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((c, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-red-800 dark:text-red-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-2xl p-6">
                    <h3 className="flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold mb-4">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('industries.solutions', 'Our Solutions')}
                    </h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-green-800 dark:text-green-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <motion.div
                className={`relative ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-[4/3] rounded-2xl bg-navy-100 dark:bg-navy-700 overflow-hidden">
                  <img
                    src={industry.image || '/images/general/placeholder.jpg'}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryList;
