import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { HeroBackgroundProps } from './Hero.types';

const particles = [
  { left: '12%', top: '22%', size: 6, delay: 0 },
  { left: '28%', top: '68%', size: 4, delay: 1.2 },
  { left: '46%', top: '18%', size: 5, delay: 0.6 },
  { left: '63%', top: '74%', size: 7, delay: 2.1 },
  { left: '78%', top: '32%', size: 4, delay: 1.6 },
  { left: '88%', top: '58%', size: 6, delay: 0.9 },
  { left: '36%', top: '40%', size: 3, delay: 2.6 },
  { left: '70%', top: '12%', size: 5, delay: 1.9 },
];

export function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        'hero-gradient absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#060E1A_0%,#0A1628_45%,#0B1A33_100%)]',
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="absolute -bottom-48 -right-32 h-[36rem] w-[36rem] rounded-full bg-petrol-500/20 blur-[140px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <motion.path
          d="M-50 620 C 300 540, 540 700, 820 600 S 1300 520, 1500 600"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
        />
        <motion.path
          d="M-50 680 C 320 600, 560 760, 860 660 S 1320 580, 1500 660"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.3 }}
        />
      </svg>

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-400/50"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 6 + p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,14,26,0.55)_100%)]" />
    </div>
  );
}
