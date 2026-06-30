export interface ContactPageProps {}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
  isOpen: boolean;
}
