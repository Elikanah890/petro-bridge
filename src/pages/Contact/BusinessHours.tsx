import { useTranslation } from 'react-i18next';

function BusinessHours() {
  const { t } = useTranslation();

  const hours = [
    { day: t('contact.monday', 'Monday'), time: '08:00 - 18:00', open: true },
    { day: t('contact.tuesday', 'Tuesday'), time: '08:00 - 18:00', open: true },
    { day: t('contact.wednesday', 'Wednesday'), time: '08:00 - 18:00', open: true },
    { day: t('contact.thursday', 'Thursday'), time: '08:00 - 18:00', open: true },
    { day: t('contact.friday', 'Friday'), time: '08:00 - 18:00', open: true },
    { day: t('contact.saturday', 'Saturday'), time: '09:00 - 13:00', open: true },
    { day: t('contact.sunday', 'Sunday'), time: '', open: false },
  ];

  return (
    <div className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700">
      <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {t('contact.businessHours', 'Business Hours')}
      </h3>
      <div className="space-y-2">
        {hours.map((h) => (
          <div key={h.day} className="flex justify-between items-center py-2 border-b border-navy-100 dark:border-navy-700 last:border-0">
            <span className="text-navy-700 dark:text-navy-300 text-sm">{h.day}</span>
            <span className={`text-sm font-medium ${h.open ? 'text-navy-900 dark:text-white' : 'text-red-500'}`}>
              {h.open ? h.time : t('contact.closed', 'Closed')}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-gold-500/10 rounded-lg">
        <p className="text-xs text-gold-700 dark:text-gold-400">
          <span className="font-semibold">{t('contact.emergencyNote', '24/7 Emergency Support:')}</span>{' '}
          {t('contact.emergencyDesc', 'Our logistics coordination center operates 24/7 for active shipments and emergency response, 365 days a year.')}
        </p>
      </div>
    </div>
  );
}

export default BusinessHours;
