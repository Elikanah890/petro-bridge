import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const comparisonData = [
  { aspect: 'Carrier Management', petroBridge: 'Pre-qualified network of 150+ rigorously vetted carriers with continuous performance monitoring', traditional: 'Ad-hoc engagement of unverified transporters with no systematic quality control' },
  { aspect: 'Shipment Visibility', petroBridge: 'Real-time GPS tracking with geofencing, automated milestone alerts, and live map visualization', traditional: 'Phone calls and manual check-ins for location updates, often inaccurate or delayed' },
  { aspect: 'Delivery Verification', petroBridge: 'Electronic Proof of Delivery with digital signatures, photo evidence, and quantity reconciliation', traditional: 'Paper-based delivery notes prone to errors, disputes, and loss' },
  { aspect: 'Exception Management', petroBridge: '24/7 proactive monitoring with automated alerts, rapid response protocols, and root cause analysis', traditional: 'Reactive problem discovery — often hours or days after incidents occur' },
  { aspect: 'Reporting & Analytics', petroBridge: 'Customizable dashboards, automated reports, carrier scorecards, and predictive analytics', traditional: 'Manual spreadsheet compilation with limited insights and high administrative overhead' },
  { aspect: 'Cost Control', petroBridge: 'Transparent coordination fees, consolidated volume leverage, and data-driven cost optimization saving 15-25%', traditional: 'Opaque pricing, hidden fees, and no systematic cost optimization' },
  { aspect: 'Regulatory Compliance', petroBridge: 'Full compliance with EWURA, OSHA, NEMC requirements with automated documentation', traditional: 'Manual compliance tracking with risk of violations and penalties' },
  { aspect: 'Scalability', petroBridge: 'On-demand access to carrier network across all Tanzanian regions with no capital investment', traditional: 'Limited to owned fleet capacity or time-consuming transporter sourcing per shipment' },
];

function ComparisonTable() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-white mb-4">
            {t('whyUs.comparisonTitle', 'Petro Bridge vs Traditional Approach')}
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            {t('whyUs.comparisonSubtitle', 'See how our coordinated approach compares to traditional transporter management across key logistics dimensions.')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-navy-700"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-800 dark:bg-navy-950">
                <th className="text-left p-5 font-semibold text-navy-300 min-w-[180px]">
                  {t('whyUs.aspect', 'Aspect')}
                </th>
                <th className="text-left p-5 font-semibold text-gold-500 min-w-[280px]">
                  {t('whyUs.petroBridge', 'Petro Bridge Solutions')}
                </th>
                <th className="text-left p-5 font-semibold text-navy-400 min-w-[280px]">
                  {t('whyUs.traditional', 'Traditional Transporter Management')}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className={`border-t border-navy-700 ${i % 2 === 0 ? 'bg-navy-800/30' : ''}`}>
                  <td className="p-5 font-medium text-white">{row.aspect}</td>
                  <td className="p-5 text-navy-200">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {row.petroBridge}
                    </div>
                  </td>
                  <td className="p-5 text-navy-400">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {row.traditional}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

export default ComparisonTable;
