import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

function ProcessDemo() {
  const { t } = useTranslation();

  const dashboardFeatures = [
    {
      title: t('process.demo.mapTitle', 'Live Shipment Map'),
      desc: t('process.demo.mapDesc', 'Track every active shipment in real-time on an interactive map with GPS positioning, route visualization, and geofence zones.'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: t('process.demo.alertsTitle', 'Automated Alerts'),
      desc: t('process.demo.alertsDesc', 'Receive instant notifications for key milestones — loading confirmed, departure, geofence entry/exit, arrival at destination, and delivery completion.'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      ),
    },
    {
      title: t('process.demo.dashboardTitle', 'Analytics Dashboard'),
      desc: t('process.demo.dashboardDesc', 'Customizable KPI dashboards showing delivery performance, carrier scorecards, cost analysis, inventory levels, and trend reports at a glance.'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
              {t('process.demo.title', 'See Our Platform in Action')}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 mb-8 leading-relaxed">
              {t('process.demo.desc', 'Our proprietary logistics coordination platform puts complete control at your fingertips. Real-time tracking, automated alerts, comprehensive analytics — all in one intuitive interface designed for petroleum logistics professionals.')}
            </p>
            <div className="space-y-6 mb-8">
              {dashboardFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 dark:text-white mb-1">{f.title}</h3>
                    <p className="text-navy-600 dark:text-navy-400 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button variant="gold" size="lg">
              {t('process.demo.cta', 'Request a Demo')}
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ProcessDemo;
