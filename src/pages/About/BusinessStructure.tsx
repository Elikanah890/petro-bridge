import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function BusinessStructure() {
  const { t } = useTranslation();

  const divisions = [
    {
      title: t('about.divisionOps', 'Operations & Logistics Coordination'),
      description: t('about.divisionOpsDesc', 'Our 24/7 coordination center is the operational heartbeat of Petro Bridge Solutions. Staffed by experienced logistics coordinators, this division manages all aspects of the logistics lifecycle — carrier assignment, dispatch coordination, real-time shipment monitoring, exception management, and delivery verification.'),
    },
    {
      title: t('about.divisionTech', 'Technology & Platform Development'),
      description: t('about.divisionTechDesc', 'Our in-house technology team builds and maintains the proprietary logistics coordination platform that powers our services. This division drives continuous innovation in tracking, analytics, automation, and user experience to keep Petro Bridge at the cutting edge of logistics technology.'),
    },
    {
      title: t('about.divisionCarrier', 'Carrier Network Management'),
      description: t('about.divisionCarrierDesc', 'This division is responsible for the qualification, onboarding, training, and continuous performance management of our carrier network. They ensure every transporter in our network meets our rigorous standards and maintains those standards through ongoing assessment.'),
    },
    {
      title: t('about.divisionCommercial', 'Commercial & Client Partnerships'),
      description: t('about.divisionCommercialDesc', 'Our commercial team works closely with clients to understand their evolving needs, design customized logistics solutions, and ensure our services deliver measurable business value. This division manages client relationships, business development, and strategic partnerships.'),
    },
  ];

  return (
    <section id="structure" className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('about.structureTitle', 'Business Structure')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-3xl mx-auto">
            {t('about.structureSubtitle', 'Petro Bridge Solutions is organized into four specialized divisions, each focused on delivering excellence in its domain while working seamlessly together to provide integrated logistics coordination.')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                <span className="text-gold-600 font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{div.title}</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed">{div.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessStructure;
