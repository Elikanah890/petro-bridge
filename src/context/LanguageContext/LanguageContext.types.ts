import type { ReactNode } from 'react';
import type { Language } from '@/types/theme.types';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
