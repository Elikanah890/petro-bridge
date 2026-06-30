import { useTranslation } from 'react-i18next';
import { faqs } from '@/data/faqs';

interface FAQCategoriesProps {
  active: string;
  onChange: (category: string) => void;
}

function FAQCategories({ active, onChange }: FAQCategoriesProps) {
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('faq.catAll', 'All Questions'), count: faqs.length },
    { id: 'general', label: t('faq.catGeneral', 'General'), count: faqs.filter((f) => f.category === 'general').length },
    { id: 'services', label: t('faq.catServices', 'Services'), count: faqs.filter((f) => f.category === 'services').length },
    { id: 'operations', label: t('faq.catOperations', 'Operations'), count: faqs.filter((f) => f.category === 'operations').length },
    { id: 'technology', label: t('faq.catTechnology', 'Technology'), count: faqs.filter((f) => f.category === 'technology').length },
    { id: 'pricing', label: t('faq.catPricing', 'Pricing'), count: faqs.filter((f) => f.category === 'pricing').length },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            active === cat.id
              ? 'bg-gold-500 text-navy-900 shadow-gold'
              : 'bg-navy-50 dark:bg-navy-800 text-navy-600 dark:text-navy-400 hover:bg-navy-100 dark:hover:bg-navy-700 border border-navy-100 dark:border-navy-700'
          }`}
        >
          {cat.label}
          <span className={`ml-1.5 text-xs ${active === cat.id ? 'text-navy-800' : 'text-navy-400'}`}>
            ({cat.count})
          </span>
        </button>
      ))}
    </div>
  );
}

export default FAQCategories;
