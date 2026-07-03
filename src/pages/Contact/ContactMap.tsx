import { useTranslation } from 'react-i18next';

function ContactMap() {
  const { t } = useTranslation();

  return (
    <div className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700">
      <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
        {t('contact.mapTitle', 'Our Location')}
      </h3>
      <div className="aspect-video rounded-xl overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kigamboni%2C%20Dar%20es%20Salaam%2C%20Tanzania&amp;output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('contact.mapTitle', 'Petro Bridge Solutions Office Location')}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default ContactMap;
