export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image?: string;
  category: 'qualification' | 'dispatch' | 'verification' | 'reporting';
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}
