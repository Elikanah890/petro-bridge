import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { motion } from 'framer-motion';

function TermsConditions() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('terms.pageTitle', 'Terms & Conditions | Petro Bridge Solutions')}</title>
        <meta name="description" content={t('terms.metaDescription', 'Terms and conditions for Petro Bridge Solutions petroleum logistics coordination services in Tanzania. Read our service terms, client obligations, and legal framework.')} />
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
              <h1 className="text-display-md lg:text-display-lg font-bold text-white mb-6">Terms & Conditions</h1>
              <p className="text-lg text-navy-300 max-w-3xl mx-auto">
                Last updated: January 1, 2026
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                By accessing or using the Petro Bridge Solutions website, platform, or services (&ldquo;Services&rdquo;), you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you must not use our Services. These Terms constitute a legally binding agreement between you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Petro Bridge Solutions (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a company registered in the United Republic of Tanzania.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">2. Description of Services</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-4">
                Petro Bridge Solutions provides petroleum logistics coordination services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-8 space-y-1">
                <li>Carrier qualification and onboarding</li>
                <li>Dispatch coordination and load planning</li>
                <li>Depot and inventory management</li>
                <li>Real-time shipment monitoring</li>
                <li>Exception and incident management</li>
                <li>Delivery verification and reconciliation</li>
                <li>Analytics, insights, and reporting</li>
              </ul>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                Petro Bridge Solutions acts as a logistics coordinator and does not own, operate, or lease transportation vehicles or equipment. We are not a transporter, freight forwarder, or fuel supplier. Our role is to coordinate, monitor, verify, and optimize the logistics process on behalf of our clients.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">3. Client Obligations</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-8 space-y-1">
                <li>Provide accurate, complete, and current information for service delivery</li>
                <li>Maintain the confidentiality of account credentials and platform access</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Make timely payments in accordance with agreed terms</li>
                <li>Not use the Services for any unlawful or unauthorized purpose</li>
                <li>Cooperate with our team for effective service delivery</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">4. Fees and Payment</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                Service fees are determined by the service agreement executed between Petro Bridge Solutions and the Client. Fees are typically structured as coordination fees based on volume, trip count, or service scope. Payment terms, including invoicing schedule and payment methods, are specified in the service agreement. Late payments may incur interest at the rate specified in the agreement or at the maximum rate permitted by Tanzanian law.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                All content, software, technology, data, and materials provided as part of our Services, including the Petro Bridge Solutions platform, website, reports, and documentation, are the exclusive intellectual property of Petro Bridge Solutions or its licensors. Clients are granted a limited, non-exclusive, non-transferable license to use the platform and materials solely in connection with the Services during the term of the agreement.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">6. Confidentiality</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                Both parties agree to maintain the confidentiality of all proprietary and business-sensitive information exchanged during the course of the engagement. This includes but is not limited to pricing, logistics data, business strategies, client lists, and technology. Confidentiality obligations survive the termination of the service agreement.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-4">
                To the maximum extent permitted by Tanzanian law:
              </p>
              <ul className="list-disc pl-6 text-navy-600 dark:text-navy-300 mb-8 space-y-1">
                <li>Petro Bridge Solutions is not liable for any indirect, consequential, incidental, or special damages arising from the use of our Services.</li>
                <li>Our total liability for any claim arising from or related to the Services is limited to the fees paid by the Client in the three (3) months preceding the claim.</li>
                <li>We are not liable for losses resulting from factors beyond our reasonable control, including force majeure events.</li>
                <li>We are not liable for the actions or omissions of third-party carriers in our network, though we exercise reasonable care in their selection and management.</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">8. Termination</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                Either party may terminate the service agreement by providing written notice as specified in the agreement. Upon termination, the Client must cease use of the platform and all Services, and all outstanding fees become immediately due. Certain provisions, including confidentiality, intellectual property, and limitations of liability, survive termination.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">9. Governing Law and Dispute Resolution</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                These Terms are governed by and construed in accordance with the laws of the United Republic of Tanzania. Any dispute arising from or relating to these Terms or the Services shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be referred to mediation in Dar es Salaam, Tanzania, before resorting to litigation in the competent courts of Tanzania.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">10. Force Majeure</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                Neither party shall be liable for failure to perform its obligations under these Terms if such failure results from circumstances beyond its reasonable control, including but not limited to natural disasters, acts of government, war, civil unrest, pandemics, or infrastructure failures not caused by the affected party.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">11. Amendments</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                We reserve the right to modify these Terms at any time. Material changes will be communicated to active clients with at least thirty (30) days notice. Continued use of Services after changes become effective constitutes acceptance of the modified Terms.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">12. Contact</h2>
              <p className="text-navy-600 dark:text-navy-300 mb-8">
                For questions about these Terms, contact us at:
              </p>
              <ul className="list-none text-navy-600 dark:text-navy-300 mb-8 space-y-2">
                <li><strong>Email:</strong> legal@petrobridgesolutions.co.tz</li>
                <li><strong>Phone:</strong> +255 734 567 890</li>
                <li><strong>Address:</strong> Mikocheni Light Industrial Area, Plot No. 87, Dar es Salaam, Tanzania</li>
              </ul>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default TermsConditions;
