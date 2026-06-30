import { useTranslation } from 'react-i18next';

interface FAQSearchProps {
  value: string;
  onChange: (value: string) => void;
}

function FAQSearch({ value, onChange }: FAQSearchProps) {
  const { t } = useTranslation();

  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('faq.searchPlaceholder', 'Search frequently asked questions...')}
        className="w-full pl-12 pr-4 py-4 bg-navy-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 rounded-xl text-navy-900 dark:text-white placeholder-navy-400 dark:placeholder-navy-500 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-navy-400 hover:text-navy-600 dark:hover:text-navy-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default FAQSearch;
