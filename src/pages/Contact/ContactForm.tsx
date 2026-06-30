import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `${t('contact.whatsappLabel')}%0A%0A` +
      `${t('contact.fullName')}: ${formData.fullName}%0A` +
      `${t('contact.company')}: ${formData.company}%0A` +
      `${t('contact.email')}: ${formData.email}%0A` +
      `${t('contact.phone')}: ${formData.phone}%0A` +
      `${t('contact.serviceInterest')}: ${formData.service}%0A` +
      `${t('contact.message')}: ${formData.message}%0A%0A` +
      `${t('contact.whatsappFooter')}%0A` +
      `${t('contact.whatsappThanks')}`;

    const whatsappNumber = SITE_CONFIG.whatsapp.replace(/[\s+]/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

    setStatus('success');
    setFormData({ fullName: '', email: '', phone: '', company: '', service: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const services = [
    'Carrier Qualification & Onboarding',
    'Dispatch Coordination & Load Planning',
    'Depot & Inventory Management',
    'Real-Time Shipment Monitoring',
    'Exception & Incident Management',
    'Delivery Verification & Reconciliation',
    'Analytics, Insights & Reporting',
  ];

  return (
    <motion.form
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700"
    >
      <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
        {t('contact.formTitle', 'Send Us a Message')}
      </h2>
      <p className="text-navy-500 dark:text-navy-400 mb-8 text-sm">
        {t('contact.formSubtitle', 'Fill out the form below and our team will get back to you within 24 hours.')}
      </p>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1.5">
            {t('contact.fullName', 'Full Name')} *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
            className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 rounded-xl text-navy-900 dark:text-white placeholder-navy-400 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all text-sm"
            placeholder={t('contact.fullNamePlaceholder', 'Enter your full name')}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1.5">
              {t('contact.email', 'Email Address')} *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 rounded-xl text-navy-900 dark:text-white placeholder-navy-400 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all text-sm"
              placeholder="name@company.co.tz"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1.5">
              {t('contact.phone', 'Phone Number')}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 rounded-xl text-navy-900 dark:text-white placeholder-navy-400 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all text-sm"
              placeholder="+255 7XX XXX XXX"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1.5">
              {t('contact.company', 'Company Name')} *
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
              className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 rounded-xl text-navy-900 dark:text-white placeholder-navy-400 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all text-sm"
              placeholder={t('contact.companyPlaceholder', 'Your company name')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1.5">
              {t('contact.serviceInterest', 'Service Interest')}
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
              className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 rounded-xl text-navy-900 dark:text-white focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all text-sm"
            >
              <option value="">{t('contact.selectService', 'Select a service')}</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1.5">
            {t('contact.message', 'Your Message')} *
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 rounded-xl text-navy-900 dark:text-white placeholder-navy-400 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all text-sm resize-none"
            placeholder={t('contact.messagePlaceholder', 'Tell us about your logistics needs, challenges, or questions...')}
          />
        </div>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          className="w-full"

        >
          {status === 'success' ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {t('contact.sent', 'Message Sent!')}
            </span>
          ) : (
            t('contact.sendWhatsApp', 'Send via WhatsApp')
          )}
        </Button>

      </div>
    </motion.form>
  );
}

export default ContactForm;
