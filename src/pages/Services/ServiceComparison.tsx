import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function ServiceComparison() {
  const { t } = useTranslation();

  const comparisonRows = [
    { feature: t('services.comp.carrierManagement', 'Carrier Management'), qualification: true, dispatch: true, depot: false, monitoring: false, exception: false, verification: false, reporting: false },
    { feature: t('services.comp.dispatchCoordination', 'Dispatch Coordination'), qualification: false, dispatch: true, depot: false, monitoring: false, exception: false, verification: false, reporting: false },
    { feature: t('services.comp.inventoryTracking', 'Inventory Tracking'), qualification: false, dispatch: false, depot: true, monitoring: false, exception: false, verification: false, reporting: true },
    { feature: t('services.comp.realTimeTracking', 'Real-Time Tracking'), qualification: false, dispatch: false, depot: false, monitoring: true, exception: false, verification: false, reporting: true },
    { feature: t('services.comp.incidentResponse', 'Incident Response'), qualification: false, dispatch: false, depot: false, monitoring: false, exception: true, verification: false, reporting: false },
    { feature: t('services.comp.deliveryVerification', 'Delivery Verification'), qualification: false, dispatch: false, depot: false, monitoring: false, exception: false, verification: true, reporting: true },
    { feature: t('services.comp.analyticsReporting', 'Analytics & Reporting'), qualification: false, dispatch: true, depot: true, monitoring: true, exception: true, verification: true, reporting: true },
    { feature: t('services.comp.gpsGeofencing', 'GPS & Geofencing'), qualification: false, dispatch: true, depot: false, monitoring: true, exception: true, verification: true, reporting: false },
    { feature: t('services.comp.24x7Support', '24/7 Support'), qualification: true, dispatch: true, depot: true, monitoring: true, exception: true, verification: true, reporting: true },
    { feature: t('services.comp.regulatoryCompliance', 'Regulatory Compliance'), qualification: true, dispatch: false, depot: false, monitoring: false, exception: false, verification: true, reporting: true },
  ];

  const categories = ['qualification', 'dispatch', 'depot', 'monitoring', 'exception', 'verification', 'reporting'] as const;

  const shortNames: Record<string, string> = {
    qualification: t('services.comp.shortQual', 'Qualification'),
    dispatch: t('services.comp.shortDisp', 'Dispatch'),
    depot: t('services.comp.shortDepot', 'Depot'),
    monitoring: t('services.comp.shortMon', 'Monitoring'),
    exception: t('services.comp.shortExcep', 'Exception'),
    verification: t('services.comp.shortVerif', 'Verification'),
    reporting: t('services.comp.shortReport', 'Reporting'),
  };

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
            {t('services.comp.title', 'Service Comparison')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('services.comp.subtitle', 'See how our services span the entire logistics lifecycle, with each service complementing the others for comprehensive coordination.')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-navy-100 dark:border-navy-700"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-900 dark:bg-navy-950 text-white">
                <th className="text-left p-4 font-semibold min-w-[200px]">
                  {t('services.comp.feature', 'Feature')}
                </th>
                {categories.map((cat) => (
                  <th key={cat} className="p-4 font-semibold text-center min-w-[100px]">
                    {shortNames[cat]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className={`border-t border-navy-100 dark:border-navy-700 ${i % 2 === 0 ? 'bg-navy-50 dark:bg-navy-800/50' : 'bg-white dark:bg-navy-900'}`}>
                  <td className="p-4 font-medium text-navy-700 dark:text-navy-200">{row.feature}</td>
                  {categories.map((cat) => (
                    <td key={cat} className="p-4 text-center">
                      {row[cat as keyof typeof row] ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold-500/20 text-gold-600">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-navy-300 dark:text-navy-600">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceComparison;
