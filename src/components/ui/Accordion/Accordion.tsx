import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { AccordionProps } from './Accordion.types';

function AccordionList({ items }: { items: AccordionProps['items'] }) {
  return (
    <>
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className="overflow-hidden rounded-xl border border-navy-100 bg-white transition-colors dark:border-navy-700 dark:bg-navy-800"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy-900 transition-colors hover:text-gold-600 dark:text-white dark:hover:text-gold-400">
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-[accordionUp_0.25s_ease] data-[state=open]:animate-[accordionDown_0.25s_ease]">
            <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
              {item.answer}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </>
  );
}

export function Accordion({
  items,
  type = 'single',
  defaultValue,
  collapsible = true,
  className,
}: AccordionProps) {
  const containerClass = cn('flex flex-col gap-3', className);

  if (type === 'multiple') {
    return (
      <AccordionPrimitive.Root
        type="multiple"
        defaultValue={defaultValue ? [defaultValue] : undefined}
        className={containerClass}
      >
        <AccordionList items={items} />
      </AccordionPrimitive.Root>
    );
  }

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible={collapsible}
      defaultValue={defaultValue}
      className={containerClass}
    >
      <AccordionList items={items} />
    </AccordionPrimitive.Root>
  );
}
