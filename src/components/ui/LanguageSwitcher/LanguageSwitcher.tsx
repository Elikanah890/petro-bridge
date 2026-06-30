import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/helpers';
import { type Language } from '@/types';
import type { LanguageOption, LanguageSwitcherProps } from './LanguageSwitcher.types';

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'sw', label: 'Kiswahili', flag: '🇹🇿' },
];

export function LanguageSwitcher({
  className,
  variant = 'default',
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const active = languages.find((l) => l.code === language) ?? languages[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    i18n.changeLanguage(code);
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-navy-700 transition-colors',
          'hover:bg-navy-50 hover:text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500',
          'dark:text-navy-100 dark:hover:bg-navy-800 dark:hover:text-white',
          className
        )}
        aria-label="Select language"
      >
        {variant === 'compact' ? (
          <Globe className="h-4 w-4" />
        ) : (
          <span className="text-base leading-none">{active.flag}</span>
        )}
        <span className="uppercase">{active.code}</span>
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-[120] min-w-[10rem] overflow-hidden rounded-xl border border-navy-100 bg-white p-1.5 shadow-card-hover dark:border-navy-700 dark:bg-navy-800"
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              onSelect={() => handleSelect(lang.code)}
              className={cn(
                'flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm outline-none',
                'text-navy-700 transition-colors data-[highlighted]:bg-navy-50 data-[highlighted]:text-navy-900',
                'dark:text-navy-100 dark:data-[highlighted]:bg-navy-700 dark:data-[highlighted]:text-white'
              )}
            >
              <span className="flex items-center gap-2.5">
                <span className="text-base leading-none">{lang.flag}</span>
                {lang.label}
              </span>
              {lang.code === language && (
                <Check className="h-4 w-4 text-gold-500" />
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
