export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface FormState {
  status: FormStatus;
  message?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Statistic {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: string;
}
