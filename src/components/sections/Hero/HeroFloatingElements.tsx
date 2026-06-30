import { Droplet, Truck, Gauge, Navigation } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { HeroFloatingElementsProps } from './Hero.types';

const elements = [
  { Icon: Droplet, className: 'left-[8%] top-[26%]', size: 'h-10 w-10', delay: '0s' },
  { Icon: Truck, className: 'right-[10%] top-[30%]', size: 'h-12 w-12', delay: '1.5s' },
  { Icon: Gauge, className: 'left-[14%] bottom-[20%]', size: 'h-9 w-9', delay: '0.8s' },
  { Icon: Navigation, className: 'right-[16%] bottom-[24%]', size: 'h-8 w-8', delay: '2.2s' },
];

export function HeroFloatingElements({ className }: HeroFloatingElementsProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 hidden lg:block', className)} aria-hidden="true">
      {elements.map(({ Icon, className: pos, size, delay }, i) => (
        <div
          key={i}
          className={cn('absolute animate-float', pos)}
          style={{ animationDelay: delay }}
        >
          <div className="flex items-center justify-center rounded-2xl border border-gold-500/20 bg-white/5 p-4 backdrop-blur-sm">
            <Icon className={cn('text-gold-400/70', size)} strokeWidth={1.5} />
          </div>
        </div>
      ))}

      <svg
        className="absolute left-1/2 top-[18%] h-16 w-40 -translate-x-1/2 animate-float opacity-30"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 160 64"
        fill="none"
      >
        <path
          d="M4 52 Q 80 4 156 52"
          stroke="rgba(212,175,55,0.6)"
          strokeWidth="2"
          fill="none"
        />
        <line x1="4" y1="52" x2="4" y2="62" stroke="rgba(212,175,55,0.6)" strokeWidth="2" />
        <line x1="156" y1="52" x2="156" y2="62" stroke="rgba(212,175,55,0.6)" strokeWidth="2" />
        <line x1="40" y1="29" x2="40" y2="52" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
        <line x1="80" y1="20" x2="80" y2="52" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
        <line x1="120" y1="29" x2="120" y2="52" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
