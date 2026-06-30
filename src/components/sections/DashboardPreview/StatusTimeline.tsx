import { Check } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { StatusTimelineProps, TimelineState } from './DashboardPreview.types';

const nodeStyles: Record<TimelineState, string> = {
  done: 'border-emerald-500 bg-emerald-500 text-navy-900',
  active: 'border-gold-500 bg-gold-500 text-navy-900 animate-pulse-gold',
  pending: 'border-white/20 bg-transparent text-transparent',
};

const labelStyles: Record<TimelineState, string> = {
  done: 'text-white',
  active: 'text-gold-400 font-semibold',
  pending: 'text-navy-300',
};

export function StatusTimeline({ stages, className }: StatusTimelineProps) {
  return (
    <ol className={cn('relative space-y-5', className)}>
      {stages.map((stage, index) => {
        const isLast = index === stages.length - 1;
        return (
          <li key={stage.label} className="relative flex gap-4">
            {!isLast && (
              <span
                className={cn(
                  'absolute left-[11px] top-6 h-[calc(100%+0.25rem)] w-px',
                  stage.state === 'done' ? 'bg-emerald-500/50' : 'bg-white/15'
                )}
              />
            )}
            <span
              className={cn(
                'relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2',
                nodeStyles[stage.state]
              )}
            >
              {stage.state === 'done' && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              {stage.state === 'active' && <span className="h-2 w-2 rounded-full bg-navy-900" />}
            </span>
            <div className="flex-1 pb-1">
              <p className={cn('text-sm leading-tight', labelStyles[stage.state])}>
                {stage.label}
              </p>
              <p className="mt-0.5 text-[11px] text-navy-300">{stage.time}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
