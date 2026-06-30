import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

function TestimonialsList() {
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
            {t('clients.testimonialsTitle', 'Client Success Stories')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('clients.testimonialsSubtitle', 'Hear directly from the companies that rely on Petro Bridge Solutions for their petroleum logistics coordination.')}
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((tItem, i) => (
            <motion.div
              key={tItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 hover:border-gold-500/20 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: tItem.rating }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-navy-700 dark:text-navy-200 leading-relaxed mb-6">
                &ldquo;{tItem.content}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 border-t border-navy-100 dark:border-navy-700 pt-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 font-bold text-lg">
                  {tItem.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-navy-900 dark:text-white">{tItem.name}</p>
                  <p className="text-navy-500 dark:text-navy-400 text-sm">{tItem.position}, {tItem.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsList;
