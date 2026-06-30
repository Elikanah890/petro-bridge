import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { resources } from '@/data/resources';

function BlogList() {
  const { t } = useTranslation();

  const typeStyles: Record<string, { bg: string; text: string; label: string }> = {
    article: { bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', label: 'Article' },
    document: { bg: 'bg-green-500/10', text: 'text-green-600 dark:text-green-400', label: 'Guide' },
    video: { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', label: 'Video' },
    'case-study': { bg: 'bg-gold-500/10', text: 'text-gold-600', label: 'Case Study' },
  };

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('resources.blogTitle', 'Articles & Insights')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('resources.blogSubtitle', 'Expert perspectives on petroleum logistics, supply chain optimization, regulatory updates, and technology trends in East Africa.')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <motion.a
              key={resource.id}
              href={resource.downloadUrl || '#'}
              {...(resource.downloadUrl ? { download: true } : {})}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-navy-50 dark:bg-navy-800 rounded-2xl border border-navy-100 dark:border-navy-700 hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-navy-100 dark:bg-navy-700 flex items-center justify-center">
                <svg className="w-12 h-12 text-navy-300 dark:text-navy-600 group-hover:text-gold-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${typeStyles[resource.type]?.bg || 'bg-navy-200'} ${typeStyles[resource.type]?.text || 'text-navy-600'}`}>
                    {typeStyles[resource.type]?.label || resource.type}
                  </span>
                  <span className="text-navy-400 text-xs">{resource.date}</span>
                </div>
                <h3 className="font-bold text-navy-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-400 text-sm leading-relaxed line-clamp-3">
                  {resource.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
