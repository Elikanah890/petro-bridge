import { MapPin, Truck, Fuel, CheckCircle2, CircleDot, Clock } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { ShipmentCardProps } from './DashboardPreview.types';

const statusConfig = {
  active: {
    label: 'In Transit',
    dot: 'bg-gold-500',
    text: 'text-gold-400',
    badge: 'bg-gold-500/15 text-gold-400 border-gold-500/30',
    Icon: CircleDot,
  },
  delivered: {
    label: 'Delivered',
    dot: 'bg-emerald-500',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    Icon: CheckCircle2,
  },
  scheduled: {
    label: 'Scheduled',
    dot: 'bg-navy-300',
    text: 'text-navy-200',
    badge: 'bg-white/10 text-navy-100 border-white/15',
    Icon: Clock,
  },
} as const;

export function ShipmentCard({ shipment, active, className }: ShipmentCardProps) {
  const config = statusConfig[shipment.status];
  const StatusIcon = config.Icon;

  return (
    <div
      className={cn(
        'rounded-xl border bg-navy-900/60 p-4 transition-all duration-300',
        active
          ? 'border-gold-500/60 ring-1 ring-gold-500/30'
          : 'border-white/10 hover:border-white/25',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gold-400">
            <Fuel className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{shipment.id}</p>
            <p className="text-[11px] text-navy-200">{shipment.product}</p>
          </div>
        </div>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide',
            config.badge
          )}
        >
          <StatusIcon className="h-3 w-3" />
          {config.label}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-navy-100">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-navy-300" />
        <span className="font-medium text-white">{shipment.origin}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-emerald-500/40" />
        <span className="font-medium text-white">{shipment.destination}</span>
      </div>

      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1 text-navy-200">
            <Truck className="h-3 w-3" />
            {shipment.carrier}
          </span>
          <span className={cn('font-semibold', config.text)}>{shipment.progress}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className={cn(
              'h-full rounded-full',
              shipment.status === 'delivered'
                ? 'bg-emerald-500'
                : 'bg-gradient-to-r from-gold-400 to-gold-600'
            )}
            style={{ width: `${shipment.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-navy-200">
        <span>{shipment.volume}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          ETA {shipment.eta}
        </span>
      </div>
    </div>
  );
}
