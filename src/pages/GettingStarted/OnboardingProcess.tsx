import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const onboardingSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    desc: 'Schedule a discovery call with our commercial team to discuss your fuel logistics requirements, current challenges, supply chain structure, volume patterns, and operational goals. This typically takes 1-2 hours and can be done virtually or at your office.',
    duration: '1-2 hours',
  },
  {
    step: 2,
    title: 'Logistics Needs Assessment',
    desc: 'Our operations team conducts a detailed analysis of your current logistics operations — mapping supply points, delivery locations, consumption patterns, existing carrier relationships, and technology systems. We identify optimization opportunities and define project scope.',
    duration: '2-3 business days',
  },
  {
    step: 3,
    title: 'Custom Solution Proposal',
    desc: 'We present a tailored logistics coordination proposal including recommended services, carrier network configuration, pricing structure, platform setup plan, and projected outcomes. We work with you to refine the proposal until it perfectly matches your needs.',
    duration: '1-2 business days',
  },
  {
    step: 4,
    title: 'Agreement & Onboarding',
    desc: 'Once the proposal is approved, we execute the service agreement and begin the formal onboarding process — carrier assignment, platform configuration, user account setup, and integration planning. You receive a dedicated account manager.',
    duration: '3-5 business days',
  },
  {
    step: 5,
    title: 'Platform Training',
    desc: 'Your team receives comprehensive training on our logistics coordination platform — dashboard navigation, shipment tracking, report generation, alert configuration, and mobile app usage. Training is provided in English or Swahili, on-site or virtually.',
    duration: '1-2 days',
  },
  {
    step: 6,
    title: 'Go-Live & Continuous Support',
    desc: 'Your coordination goes live with our team providing intensive hands-on support during the transition period. After stabilization, you transition to ongoing 24/7 monitoring with regular performance reviews and continuous optimization recommendations.',
    duration: 'Ongoing',
  },
];

function OnboardingProcess() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('gettingStarted.onboardingTitle', 'Onboarding Process')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('gettingStarted.onboardingSubtitle', 'Our structured six-step onboarding process gets you from initial consultation to fully operational logistics coordination in as little as 5-10 business days.')}
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-navy-200 dark:bg-navy-700 hidden lg:block" />
          <div className="space-y-12">
            {onboardingSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-8"
              >
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gold-500 items-center justify-center text-navy-900 font-bold text-lg shadow-gold z-10">
                  {step.step}
                </div>
                <div className={`w-full lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                  <div className="flex lg:hidden w-10 h-10 rounded-full bg-gold-500 items-center justify-center text-navy-900 font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white">{step.title}</h3>
                      <span className="text-xs font-medium text-gold-600 dark:text-gold-500 bg-gold-500/10 px-2.5 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-navy-600 dark:text-navy-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnboardingProcess;
