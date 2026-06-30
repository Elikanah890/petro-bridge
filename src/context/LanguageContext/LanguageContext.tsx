import { createContext, useCallback, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Language } from '@/types/theme.types';
import type { LanguageContextType } from './LanguageContext.types';

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguageValue] = useLocalStorage<Language>('petro-language', 'en');

  const setLanguage = useCallback(
    (lang: Language) => {
      setLanguageValue(lang);
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    },
    [i18n, setLanguageValue]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
