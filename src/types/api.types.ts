export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service?: string;
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
}
