import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/helpers';
import type { HeroScrollIndicatorProps } from './Hero.types';

export function HeroScrollIndicator({ className }: HeroScrollIndicatorProps) {
  const { t } = useTranslation();

  return (
    <motion.a
      href="#trust-bar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className={cn(
        'group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-navy-100/60 transition-colors hover:text-gold-400',
        className
      )}
      aria-label={t('hero.scrollIndicator')}
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em]">
        {t('hero.scrollIndicator')}
      </span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-gold-500/60">
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </span>
    </motion.a>
  );
}
