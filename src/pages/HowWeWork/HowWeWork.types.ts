export interface HowWeWorkProps {}

export interface ProcessStepExtended {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  duration?: string;
  deliverables?: string[];
}
