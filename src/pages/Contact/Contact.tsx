import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { SEO } from '@/components/layout/SEO/SEO';
import { seoData } from '@/data/seo';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import BusinessHours from './BusinessHours';

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('contact.pageTitle', seoData.contact.title)}
        description={t('contact.metaDescription', seoData.contact.description)}
        keywords={seoData.contact.keywords}
        canonical="/contact"
      />
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
                {t('contact.heroLabel', 'Get In Touch')}
              </span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">
                {t('contact.heroTitle', 'Contact Us')}
              </h1>
              <p className="text-lg lg:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
                {t('contact.heroSubtitle', 'Ready to transform your fuel logistics? Have a question about our services? Our team is here to help. Reach out and let\'s start a conversation.')}
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 lg:py-28 bg-white dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <div className="space-y-8">
                <ContactInfo />
                <BusinessHours />
                <ContactMap />
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default Contact;
