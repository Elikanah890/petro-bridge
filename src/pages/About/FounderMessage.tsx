import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { founder } from '@/data/team';

function FounderMessage() {
  const { t } = useTranslation();

  return (
    <section id="founder" className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-6">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            {t('about.founderTitle')}
          </div>

          <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8 border-l-4 border-gold-500 pl-6 text-left">
            {t('about.founderMessage', founder.bio)}
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-gold-500" />
            <div>
              <p className="text-white font-bold text-lg">{founder.name}</p>
              <p className="text-navy-400 text-sm">{founder.position}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FounderMessage;
