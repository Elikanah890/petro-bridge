export interface LanguageOption {
  code: 'en' | 'sw';
  label: string;
  flag: string;
}

export interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'compact';
}
