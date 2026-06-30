import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function DownloadCenter() {
  const { t } = useTranslation();

  const downloads = [
    {
      title: t('resources.dl.companyProfile', 'Company Profile'),
      desc: t('resources.dl.companyProfileDesc', 'Complete overview of Petro Bridge Solutions — our story, services, network, and value proposition.'),
      size: '3.2 MB',
      type: 'PDF',
      url: '/downloads/company-profile.pdf',
    },
    {
      title: t('resources.dl.serviceCatalog', 'Service Catalog'),
      desc: t('resources.dl.serviceCatalogDesc', 'Detailed description of all seven logistics coordination services with features and benefits.'),
      size: '2.8 MB',
      type: 'PDF',
      url: '/downloads/service-catalog.pdf',
    },
    {
      title: t('resources.dl.carrierStandards', 'Carrier Qualification Standards'),
      desc: t('resources.dl.carrierStandardsDesc', 'Our comprehensive carrier qualification criteria, audit framework, and performance metrics.'),
      size: '1.5 MB',
      type: 'PDF',
      url: '/downloads/carrier-standards.pdf',
    },
    {
      title: t('resources.dl.onboardingGuide', 'Client Onboarding Guide'),
      desc: t('resources.dl.onboardingGuideDesc', 'Step-by-step guide to the Petro Bridge onboarding process and platform setup.'),
      size: '2.1 MB',
      type: 'PDF',
      url: '/downloads/onboarding-guide.pdf',
    },
  ];

  return (
    <section id="downloads" className="py-20 lg:py-28 bg-navy-50 dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('resources.downloadTitle', 'Download Center')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('resources.downloadSubtitle', 'Download company resources, service catalogs, and operational guides to learn more about how Petro Bridge Solutions can support your logistics needs.')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {downloads.map((dl, i) => (
            <motion.a
              key={dl.title}
              href={dl.url}
              download
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-5 bg-white dark:bg-navy-900 rounded-2xl p-6 border border-navy-100 dark:border-navy-700 hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                <svg className="w-7 h-7 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors mb-1">
                  {dl.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-400 text-sm mb-3">{dl.desc}</p>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-navy-100 dark:bg-navy-700 rounded text-xs text-navy-500 dark:text-navy-400 font-medium">
                    {dl.type}
                  </span>
                  <span className="text-xs text-navy-400">{dl.size}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DownloadCenter;
