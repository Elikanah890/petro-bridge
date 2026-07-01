import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const valueIcons = [
  <Fragment key="integrity">
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  </Fragment>,
  <Fragment key="operational-discipline">
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  </Fragment>,
  <Fragment key="transparency">
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </Fragment>,
  <Fragment key="accountability">
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  </Fragment>,
  <Fragment key="transport-neutrality">
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  </Fragment>,
  <Fragment key="precision">
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  </Fragment>,
];

const valueIds = ['integrity', 'operational-discipline', 'transparency', 'accountability-without-exception', 'transport-neutrality', 'precision'];

const defaultNames = ['Integrity', 'Operational Discipline', 'Transparency', 'Accountability Without Exception', 'Transport Neutrality', 'Precision'];

const defaultDescriptions = [
  'Every coordination decision is made with full accountability and professional honesty. We represent our clients\' interests without compromise — in transporter selection, communication, delivery verification, and reconciliation reporting.',
  'We do not operate informally. Every assignment follows structured coordination protocols that define roles, establish checkpoints, and enforce accountability at each stage of the logistics chain. Structure is not optional. It is the foundation of everything we do.',
  'Clients are never left uninformed. From dispatch authorization to final delivery confirmation, we maintain active communication and provide clear, accurate reporting on the status of every movement we coordinate. No surprises. No information gaps.',
  'We take full ownership of the coordination process. When challenges arise — delays, exceptions, route disruptions — we do not look for someone else to manage them. We engage immediately, coordinate the response, and keep the client informed throughout.',
  'Because we do not own transport assets, every transporter assignment is made based entirely on operational fit, verified capability, and client requirements — never on fleet utilization targets or transporter preferences. Our coordination decisions are structurally unbiased.',
  'Petroleum logistics has no tolerance for guesswork. Our coordination approach is methodical, detail-oriented, and consistently applied. The margin for operational error in fuel distribution is zero — and we operate accordingly.',
];

function CoreValues() {
  const { t } = useTranslation();

  return (
    <section id="values" className="py-20 lg:py-28 bg-navy-50 dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('about.valuesTitle', 'Our Core Values')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            {t('about.valuesSubtitle', 'These are not aspirational statements written for a brochure. They are the operational principles that define how we coordinate every assignment, engage every client, and conduct every stage of the logistics process — without exception.')}
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueIds.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 mb-5">
                {valueIcons[i]}
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                {t(`about.values.${i}.name`, defaultNames[i])}
              </h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
                {t(`about.values.${i}.description`, defaultDescriptions[i])}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
