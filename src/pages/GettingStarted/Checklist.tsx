import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const checklistItems = [
  { id: 'info', label: 'Company information and contacts gathered', desc: 'Have your company registration details, key contacts, and authorized signatories ready.' },
  { id: 'supply', label: 'Supply chain structure documented', desc: 'Map your current fuel supply points, delivery locations, typical volumes, and frequency patterns.' },
  { id: 'carriers', label: 'Current carrier information compiled', desc: 'If you have existing transporter relationships, gather their details for potential integration into our network.' },
  { id: 'tech', label: 'Technology requirements identified', desc: 'Determine integration needs with your existing ERP, accounting, or procurement systems.' },
  { id: 'users', label: 'User roles and access levels defined', desc: 'Identify who in your organization needs platform access and at what permission level (viewer, operator, admin).' },
  { id: 'requirements', label: 'Regulatory requirements documented', desc: 'Note any specific compliance, reporting, or documentation requirements applicable to your operations.' },
  { id: 'targets', label: 'Performance targets established', desc: 'Define your key logistics KPIs — delivery time targets, cost reduction goals, stockout tolerance, etc.' },
  { id: 'schedule', label: 'Implementation timeline agreed', desc: 'Align internal stakeholders on the onboarding timeline and resource commitments for a smooth process.' },
];

function Checklist() {
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = (checkedItems.size / checklistItems.length) * 100;

  return (
    <section className="py-20 lg:py-28 bg-navy-50 dark:bg-navy-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-display-sm font-bold text-navy-900 dark:text-white mb-4">
            {t('gettingStarted.checklistTitle', 'Pre-Onboarding Checklist')}
          </h2>
          <p className="text-lg text-navy-600 dark:text-navy-300">
            {t('gettingStarted.checklistSubtitle', 'Use this interactive checklist to prepare for your onboarding. Having these items ready will accelerate your go-live timeline.')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-navy-600 dark:text-navy-400">
              {t('gettingStarted.progress', 'Progress')}: {checkedItems.size}/{checklistItems.length}
            </span>
            <span className="text-sm font-bold text-gold-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-navy-200 dark:bg-navy-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
        <div className="space-y-3">
          {checklistItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start gap-4 bg-white dark:bg-navy-900 rounded-xl p-5 border border-navy-100 dark:border-navy-700 hover:border-gold-500/30 transition-all text-left"
            >
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                checkedItems.has(item.id)
                  ? 'bg-gold-500 border-gold-500'
                  : 'border-navy-300 dark:border-navy-600'
              }`}>
                {checkedItems.has(item.id) && (
                  <svg className="w-4 h-4 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <p className={`font-medium mb-1 ${checkedItems.has(item.id) ? 'text-navy-400 dark:text-navy-500 line-through' : 'text-navy-900 dark:text-white'}`}>
                  {item.label}
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-400">{item.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Checklist;
