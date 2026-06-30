import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { FAQItem } from '@/types/form.types';

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          className="bg-navy-50 dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-100 dark:hover:bg-navy-700/50 transition-colors"
          >
            <span className="font-semibold text-navy-900 dark:text-white pr-8">
              {item.question}
            </span>
            <motion.svg
              animate={{ rotate: openId === item.id ? 45 : 0 }}
              className="w-5 h-5 text-gold-500 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
            </motion.svg>
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 text-navy-600 dark:text-navy-300 leading-relaxed border-t border-navy-100 dark:border-navy-700 pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default FAQAccordion;
