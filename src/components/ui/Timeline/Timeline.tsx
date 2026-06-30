import { motion } from 'framer-motion';
import { cn } from '@/lib/helpers';
import type { TimelineProps } from './Timeline.types';

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <ol className={cn('relative', className)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <motion.li
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative flex gap-5 pb-10 last:pb-0"
          >
            {!isLast && (
              <span
                className="absolute left-[1.375rem] top-12 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-gold-500/70 to-navy-100 dark:to-navy-700"
                aria-hidden="true"
              />
            )}

            <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-500 shadow-gold ring-4 ring-gold-500/10 dark:bg-navy-700">
              {step.icon ?? index + 1}
            </div>

            <div className="pt-1">
              {step.meta && (
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                  {step.meta}
                </span>
              )}
              <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                {step.description}
              </p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
