import { Activity, Boxes, Gauge, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/shared';
import { FadeInUp } from '@/components/animations';
import { cn } from '@/lib/helpers';
import { ShipmentCard } from './ShipmentCard';
import { StatusTimeline } from './StatusTimeline';
import { MapPlaceholder } from './MapPlaceholder';
import type { DashboardShipment, TimelineStage } from './DashboardPreview.types';

const shipments: DashboardShipment[] = [
  {
    id: 'PB-48217',
    product: 'AGO / Diesel',
    volume: '36,000 L',
    origin: 'Dar es Salaam',
    destination: 'Mwanza',
    carrier: 'Kilimanjaro Haulage',
    eta: '14:20',
    progress: 68,
    status: 'active',
  },
  {
    id: 'PB-48203',
    product: 'PMS / Petrol',
    volume: '28,000 L',
    origin: 'Tanga Terminal',
    destination: 'Arusha',
    carrier: 'Serengeti Transit',
    eta: 'Delivered',
    progress: 100,
    status: 'delivered',
  },
  {
    id: 'PB-48230',
    product: 'Jet A-1',
    volume: '40,000 L',
    origin: 'Dar es Salaam',
    destination: 'Mbeya',
    carrier: 'Highland Carriers',
    eta: '06:45',
    progress: 0,
    status: 'scheduled',
  },
];

const stages: TimelineStage[] = [
  { label: 'Order Confirmed', time: '08:02 · Dispatch Center', state: 'done' },
  { label: 'Loaded at Depot', time: '09:30 · Dar es Salaam', state: 'done' },
  { label: 'Geofence Departed', time: '09:58 · Verified', state: 'done' },
  { label: 'In Transit — Central Corridor', time: 'Now · 68% complete', state: 'active' },
  { label: 'Delivery & e-POD', time: 'ETA 14:20 · Mwanza', state: 'pending' },
];

const kpis = [
  { Icon: Activity, label: 'Active Shipments', value: '42' },
  { Icon: Gauge, label: 'On-Time Rate', value: '99.7%' },
  { Icon: Boxes, label: 'In Transit (L)', value: '1.2M' },
  { Icon: ShieldCheck, label: 'Exceptions', value: '0' },
];

export function DashboardPreview({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <Section
      id="platform"
      className={cn(
        'overflow-hidden bg-[linear-gradient(160deg,#060E1A_0%,#0A1628_50%,#0B1A33_100%)]',
        className
      )}
    >
      <Container>
        <FadeInUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            Live Platform
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {t('dashboard.title')}
          </h2>
          <p className="mt-4 sm:mt-5 text-sm leading-relaxed text-navy-100/75 sm:text-base">
            One coordination console for your entire fuel supply chain — real-time shipment
            tracking, live route monitoring, and delivery verification at a glance.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15} className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-navy-950/60 shadow-card-hover backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-gold-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>
              <p className="text-xs font-medium text-navy-100/70">
                Petro Bridge — Operations Console
              </p>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                System Live
              </span>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[minmax(0,340px)_1fr]">
              <div className="space-y-4">
                <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-navy-300">
                  Active Shipments
                </p>
                {shipments.map((shipment) => (
                  <ShipmentCard
                    key={shipment.id}
                    shipment={shipment}
                    active={shipment.status === 'active'}
                  />
                ))}
              </div>

              <div className="grid gap-5">
                <MapPlaceholder origin="Dar es Salaam" destination="Mwanza" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-navy-900/50 p-5">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-navy-300">
                      Shipment PB-48217
                    </p>
                    <StatusTimeline stages={stages} />
                  </div>

                  <div className="grid grid-cols-2 gap-3 self-start">
                    {kpis.map(({ Icon, label, value }) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-navy-900/50 p-4"
                      >
                        <Icon className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
                        <p className="mt-3 text-xl font-bold text-white">{value}</p>
                        <p className="mt-0.5 text-[11px] leading-tight text-navy-300">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </Section>
  );
}
