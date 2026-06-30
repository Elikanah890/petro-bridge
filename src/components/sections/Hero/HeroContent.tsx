import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/helpers';
import { HeroButtons } from './HeroButtons';
import type { HeroContentProps, HeroStat } from './Hero.types';

const stats: HeroStat[] = [
  { value: '500M+', label: 'Liters' },
  { value: '150+', label: 'Carriers' },
  { value: '99.7%', label: 'On-Time' },
  { value: '8+', label: 'Years' },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HeroContent({ className }: HeroContentProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn('mx-auto flex max-w-4xl flex-col items-center text-center', className)}
    >
      <motion.span
        variants={item}
        className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.22em] text-gold-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
        {t('hero.label')}
      </motion.span>

      <motion.h1
        variants={item}
        className="text-balance text-center leading-[1.05] tracking-tight"
      >
        <span className="block text-4xl font-extrabold text-transparent bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl">
          {t('hero.companyName')}
        </span>
        <span className="mt-2 block text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {t('hero.title')}
        </span>
        <span className="block text-2xl font-bold text-gold-400 sm:text-3xl md:text-4xl lg:text-5xl">
          {t('hero.titleHighlight')}
        </span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-navy-100/80 sm:mt-6 sm:text-lg"
      >
        {t('hero.subtitle')}
      </motion.p>

      <motion.div
        variants={item}
        className="mt-6 sm:mt-10 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center px-3 py-4 sm:px-4 sm:py-5">
            <span className="text-xl font-bold text-gold-400 sm:text-2xl md:text-3xl">{stat.value}</span>
            <span className="mt-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-navy-100/60">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div variants={item} className="mt-10 w-full">
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
}
