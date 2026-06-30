import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15),
  company: z.string().min(2, 'Company name must be at least 2 characters').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  service: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type NewsletterValues = z.infer<typeof newsletterSchema>;
