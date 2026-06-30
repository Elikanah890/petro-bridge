import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { faqs } from '@/data/faqs';
import FAQAccordion from './FAQAccordion';
import FAQSearch from './FAQSearch';
import FAQCategories from './FAQCategories';

function FAQ() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>{t('faq.pageTitle', 'Frequently Asked Questions | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('faq.metaDescription', 'Find answers to common questions about Petro Bridge Solutions\' petroleum logistics coordination services, pricing, technology platform, and operations in Tanzania.')} />
      </Helmet>
      <PageTransition>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-900 dark:bg-navy-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
                {t('faq.heroLabel', 'Get Answers')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('faq.heroTitle', 'Frequently Asked Questions')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('faq.heroSubtitle', 'Everything you need to know about our services, process, technology, pricing, and operations. Can\'t find what you\'re looking for? Contact our team.')}
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 lg:py-28 bg-white dark:bg-navy-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSearch value={searchQuery} onChange={setSearchQuery} />
            <FAQCategories active={activeCategory} onChange={setActiveCategory} />
            <FAQAccordion items={filteredFaqs} />
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-navy-500 dark:text-navy-400 text-lg">
                  {t('faq.noResults', 'No FAQs match your search. Try different keywords or')}
                  {' '}
                  <a href="/contact" className="text-gold-500 hover:underline">
                    {t('faq.contactUs', 'contact us')}
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default FAQ;
