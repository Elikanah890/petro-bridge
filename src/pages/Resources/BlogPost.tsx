import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function BlogPost() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-navy-50 dark:bg-navy-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
            {t('resources.featuredTitle', 'Featured Insight')}
          </h2>
          <p className="text-navy-600 dark:text-navy-300 mb-8">
            {t('resources.featuredDesc', 'Read our comprehensive guide on reducing fuel supply chain losses and building an efficient logistics operation in Tanzania.')}
          </p>
          <div className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 text-left">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">Best Practices</span>
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-2 mb-4">
              Reducing Fuel Supply Chain Losses: A Practical Guide
            </h3>
            <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
              Fuel supply chain losses in Tanzania can range from 2% to 8% of total volume, costing petroleum companies millions annually. These losses occur at multiple points — during loading at depots, in transit through evaporation or pilferage, and during offloading at delivery points. This comprehensive guide provides actionable strategies to identify, measure, and eliminate these losses.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Loading Dip Procedures', 'Transit Security', 'Temperature Correction', 'e-POD Implementation', 'Reconciliation Workflows', 'Audit Trail Setup'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-navy-50 dark:bg-navy-800 rounded-full text-xs text-navy-600 dark:text-navy-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogPost;
