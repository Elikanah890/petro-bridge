import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function ContactInfo() {
  const { t } = useTranslation();

  const infoItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: t('contact.addressLabel', 'Our Location'),
      value: t('contact.address', 'Mikocheni Light Industrial Area, Plot No. 87, Dar es Salaam, Tanzania'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: t('contact.phoneLabel', 'Phone'),
      value: t('contact.phoneNumber', '+255 734 567 890'),
      secondary: t('contact.phoneSecondary', '+255 689 123 456'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: t('contact.emailLabel', 'Email'),
      value: t('contact.emailAddress', 'info@petrobridgesolutions.co.tz'),
      secondary: t('contact.emailSecondary', 'operations@petrobridgesolutions.co.tz'),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-navy-900 dark:bg-navy-950 rounded-2xl p-8 border border-navy-800"
    >
      <h2 className="text-2xl font-bold text-white mb-8">
        {t('contact.infoTitle', 'Contact Information')}
      </h2>
      <div className="space-y-6">
        {infoItems.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-navy-400 text-sm mb-1">{item.label}</p>
              <p className="text-white font-medium">{item.value}</p>
              {item.secondary && (
                <p className="text-navy-400 text-sm mt-0.5">{item.secondary}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-navy-800">
        <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
          {t('contact.followUs', 'Follow Us')}
        </p>
        <div className="flex gap-3">
          {['linkedin', 'twitter', 'facebook', 'instagram'].map((platform) => (
            <a
              key={platform}
              href={`https://${platform}.com/petrobridge`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-gold-500/20 flex items-center justify-center text-navy-400 hover:text-gold-500 transition-all"
            >
              <span className="text-sm font-bold uppercase">{platform[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
