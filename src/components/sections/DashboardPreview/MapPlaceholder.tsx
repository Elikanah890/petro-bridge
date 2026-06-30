import { motion } from 'framer-motion';
import { Truck, MapPin } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { MapPlaceholderProps } from './DashboardPreview.types';

const waypoints = [
  { x: 64, y: 212 },
  { x: 150, y: 158 },
  { x: 244, y: 150 },
  { x: 326, y: 92 },
];

export function MapPlaceholder({
  origin = 'Dar es Salaam',
  destination = 'Mwanza',
  className,
}: MapPlaceholderProps) {
  return (
    <div
      className={cn(
        'relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,#12243f_0%,#0A1628_70%)]',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <path
          d="M40 90 C 120 60, 180 120, 280 80 S 380 40, 400 70 L 400 300 L 0 300 L 0 120 C 10 100, 25 95, 40 90 Z"
          fill="rgba(212,175,55,0.04)"
          stroke="rgba(212,175,55,0.12)"
          strokeWidth="1"
        />

        <motion.path
          d="M64 212 C 110 180, 130 150, 150 158 S 220 160, 244 150 S 300 110, 326 92"
          fill="none"
          stroke="rgba(212,175,55,0.7)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        <g>
          <circle cx="64" cy="212" r="7" fill="#0A1628" stroke="#34d399" strokeWidth="2.5" />
          <circle cx="64" cy="212" r="3" fill="#34d399" />
        </g>
        <g>
          <circle cx="326" cy="92" r="7" fill="#0A1628" stroke="#D4AF37" strokeWidth="2.5" />
          <motion.circle
            cx="326"
            cy="92"
            r="7"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: '326px 92px' }}
          />
        </g>

        <motion.g
          animate={{
            x: waypoints.map((w) => w.x - 200),
            y: waypoints.map((w) => w.y - 150),
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
          style={{ x: -136, y: 62 }}
        >
          <g transform="translate(200,150)">
            <circle r="11" fill="#D4AF37" />
            <circle r="11" fill="none" stroke="#0A1628" strokeWidth="1.5" />
          </g>
        </motion.g>
      </svg>

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-navy-900/70 px-3 py-1.5 backdrop-blur-sm">
        <span className="flex h-2 w-2 items-center justify-center">
          <span className="h-2 w-2 animate-ping rounded-full bg-emerald-500/60" />
          <span className="absolute h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-medium text-white">Live Tracking</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px]">
        <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-navy-900/70 px-2.5 py-1.5 text-emerald-400 backdrop-blur-sm">
          <MapPin className="h-3 w-3" />
          {origin}
        </span>
        <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-navy-900/70 px-2.5 py-1.5 text-gold-400 backdrop-blur-sm">
          <Truck className="h-3 w-3" />
          {destination}
        </span>
      </div>
    </div>
  );
}
