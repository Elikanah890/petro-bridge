import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('privacy.pageTitle', 'Privacy Policy | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('privacy.metaDescription', 'Petro Bridge Solutions privacy policy — how we collect, use, and protect your personal and business information in accordance with Tanzanian data protection regulations.')} />
      </Helmet>
      <PageTransition>
        <section className="relative pt-32 pb-20 bg-navy-900 dark:bg-navy-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">Legal</span>
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">Privacy Policy</h1>
              <p className="text-lg text-navy-300 max-w-3xl mx-auto">
                Last updated: January 1, 2026
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-6">
                Petro Bridge Solutions (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our logistics coordination platform and services.
              </p>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                This policy complies with the relevant data protection laws and regulations applicable in the United Republic of Tanzania. By using our services, you consent to the data practices described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">2. Information We Collect</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-4">We collect the following categories of information:</p>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-2">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-4 space-y-1">
                <li>Full name, job title, and company name</li>
                <li>Email address, phone number, and physical address</li>
                <li>Professional credentials and identification documents</li>
              </ul>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-2">2.2 Business Information</h3>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-4 space-y-1">
                <li>Company registration details and tax identification numbers</li>
                <li>Logistics data including delivery locations, product volumes, and shipment details</li>
                <li>Carrier information including vehicle details and driver documentation</li>
                <li>Financial information for billing and payment processing</li>
              </ul>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-2">2.3 Technical Information</h3>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-8 space-y-1">
                <li>IP address, browser type, and device information</li>
                <li>GPS location data for shipment tracking</li>
                <li>Platform usage data and interaction analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-4">We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-8 space-y-1">
                <li>Providing and maintaining our logistics coordination services</li>
                <li>Processing and managing client accounts and service requests</li>
                <li>Real-time shipment tracking and delivery verification</li>
                <li>Generating performance reports and analytics</li>
                <li>Communicating with you about your account and our services</li>
                <li>Billing, invoicing, and payment processing</li>
                <li>Improving our platform, services, and user experience</li>
                <li>Compliance with legal and regulatory obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-4">We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-8 space-y-1">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in platform hosting, analytics, payment processing, and communication services, bound by confidentiality agreements.</li>
                <li><strong>Carriers in Our Network:</strong> Necessary operational information shared with assigned transporters for delivery execution.</li>
                <li><strong>Regulatory Authorities:</strong> As required by Tanzanian law, including EWURA, TRA, and other government agencies.</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition.</li>
                <li><strong>With Your Consent:</strong> Any other sharing with your explicit permission.</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">5. Data Security</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, secure access controls, regular security assessments, and staff training on data protection. However, no method of electronic storage or transmission is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">6. Data Retention</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Operational logistics data is retained for a minimum of seven (7) years to comply with Tanzanian commercial and tax regulations. Upon termination of services, we will securely delete or anonymize your data within a reasonable timeframe, subject to legal retention requirements.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">7. Your Rights</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-4">Under applicable Tanzanian data protection framework, you have the right to:</p>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-8 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Lodge a complaint with relevant data protection authorities</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">8. Cookies and Tracking</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                Our website and platform use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser preferences. Essential cookies required for platform functionality cannot be disabled.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">9. International Data Transfers</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                Our primary data processing occurs within Tanzania. Where we use cloud services that may involve data storage or processing outside Tanzania, we ensure appropriate safeguards are in place to protect your information in accordance with this policy and applicable law.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and, where appropriate, through direct communication. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">11. Contact Us</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
              </p>
              <ul className="list-none text-navy-600 dark:text-navy-300 mb-8 space-y-2">
                <li><strong>Email:</strong> privacy@petrobridgesolutions.co.tz</li>
                <li><strong>Phone:</strong> +255 668 746 110</li>
                <li><strong>Address:</strong> Mikocheni Light Industrial Area, Plot No. 87, Dar es Salaam, Tanzania</li>
              </ul>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default PrivacyPolicy;
