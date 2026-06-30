export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  type?: 'single' | 'multiple';
  defaultValue?: string;
  collapsible?: boolean;
  className?: string;
}
