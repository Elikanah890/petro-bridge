import type { ReactNode } from 'react';

export type ToastVariant = 'success' | 'error' | 'info';

export interface ToastData {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
}

export interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastProviderProps {
  children: ReactNode;
}
