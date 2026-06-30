import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui';
import { cn } from '@/lib/helpers';
import type { HeroButtonsProps } from './Hero.types';

export function HeroButtons({ className }: HeroButtonsProps) {
  const { t } = useTranslation();

  return (
    <div className={cn('flex flex-col items-center gap-4 sm:flex-row sm:justify-center', className)}>
      <Button
        href="#contact"
        variant="gold"
        size="lg"
        className="group w-full shadow-gold sm:w-auto"
      >
        {t('hero.ctaPrimary')}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      <Button
        href="#services"
        variant="outline"
        size="lg"
        className="w-full border-white/40 text-white hover:border-gold-500 hover:bg-white/5 hover:text-gold-400 sm:w-auto"
      >
        {t('hero.ctaSecondary')}
      </Button>
    </div>
  );
}
