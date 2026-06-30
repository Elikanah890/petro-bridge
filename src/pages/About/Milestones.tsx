import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Petro Bridge Solutions is founded in Dar es Salaam by Petro. The company begins operations with a team of five logistics professionals focused on carrier qualification and dispatch coordination for petroleum marketing companies.',
  },
  {
    year: '2019',
    title: 'First Major Client',
    description: 'Secured our first enterprise client — a leading Tanzanian oil marketing company with over 50 retail stations. Developed the initial version of our proprietary logistics coordination platform.',
  },
  {
    year: '2020',
    title: 'Platform Launch & Carrier Network Expansion',
    description: 'Launched the first version of our digital coordination platform with real-time tracking capabilities. Expanded the carrier network to 40+ pre-qualified transporters. Despite the global pandemic, maintained 100% service reliability for all clients.',
  },
  {
    year: '2021',
    title: 'Multi-Industry Expansion',
    description: 'Extended services beyond petroleum marketing to mining, construction, and manufacturing sectors. Opened 24/7 logistics coordination center. Carrier network grew to 80+ transporters.',
  },
  {
    year: '2022',
    title: 'Technology & Analytics Platform',
    description: 'Launched advanced analytics and reporting platform with customizable dashboards, automated reports, and carrier performance scorecards. Introduced delivery verification with electronic Proof of Delivery (e-POD).',
  },
  {
    year: '2023',
    title: 'Nationwide Coverage Achieved',
    description: 'Achieved full nationwide coverage across all 31 regions of Tanzania including Zanzibar. Carrier network exceeded 120 pre-qualified transporters. Coordinated over 350 million liters of fuel annually.',
  },
  {
    year: '2024',
    title: 'Government & Public Sector',
    description: 'Secured contracts with government agencies and public institutions. Launched dedicated fuel logistics solutions for emergency response and disaster management. Team grew to 40+ logistics professionals.',
  },
  {
    year: '2025',
    title: 'Regional Growth & Innovation',
    description: 'Expanded cross-border coordination capabilities to neighboring countries. Introduced IoT sensor integration for real-time temperature and condition monitoring. Coordinated over 500 million liters of fuel with 150+ carriers.',
  },
  {
    year: '2026',
    title: 'Industry Leadership',
    description: 'Serving 35+ enterprise clients across six industries with a 99.7% on-time delivery rate and 100% client retention. Recognized as Tanzania\'s premier petroleum logistics coordination authority with plans for East African regional expansion.',
  },
];

function Milestones() {
  const { t } = useTranslation();

  return (
    <section id="milestones" className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('about.milestonesTitle', 'Our Journey')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('about.milestonesSubtitle', 'From a vision in 2018 to Tanzania\'s premier petroleum logistics coordination authority — our story of growth, innovation, and relentless commitment to client success.')}
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-navy-200 dark:bg-navy-700 hidden lg:block" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : 'lg:[direction:rtl]'}`}
              >
                <div className={`text-center lg:text-right ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:[direction:ltr]'}`}>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white dark:border-navy-900 shadow-gold" />
                  <span className="inline-block text-gold-500 font-bold text-4xl lg:text-5xl mb-2">{m.year}</span>
                </div>
                <div className={`bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 ${i % 2 === 0 ? 'lg:[direction:ltr]' : 'lg:[direction:ltr]'}`}>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{m.title}</h3>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Milestones;
