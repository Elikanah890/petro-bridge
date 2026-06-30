import * as ToastPrimitive from '@radix-ui/react-toast';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { ToastProps, ToastProviderProps, ToastVariant } from './Toast.types';

const variantConfig: Record<
  ToastVariant,
  { icon: typeof Info; accent: string }
> = {
  success: { icon: CheckCircle2, accent: 'text-emerald-500' },
  error: { icon: AlertCircle, accent: 'text-red-500' },
  info: { icon: Info, accent: 'text-petrol-400' },
};

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right" duration={5000}>
      {children}
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[200] flex w-full max-w-sm flex-col gap-3 p-4 outline-none sm:bottom-4 sm:right-4" />
    </ToastPrimitive.Provider>
  );
}

export function Toast({
  open,
  onOpenChange,
  title,
  description,
  variant = 'info',
  duration = 5000,
}: ToastProps) {
  const { icon: Icon, accent } = variantConfig[variant];

  return (
    <ToastPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={duration}
      className={cn(
        'flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-card-hover',
        'data-[state=open]:animate-[slideInRight_0.25s_ease] data-[swipe=end]:animate-[fadeOut_0.2s_ease]',
        'dark:border-navy-700 dark:bg-navy-800'
      )}
    >
      <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', accent)} />
      <div className="flex-1">
        <ToastPrimitive.Title className="text-sm font-semibold text-navy-900 dark:text-white">
          {title}
        </ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className="mt-0.5 text-sm text-navy-500 dark:text-navy-300">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>
      <ToastPrimitive.Close
        aria-label="Close"
        className="rounded-md p-1 text-navy-400 transition-colors hover:bg-navy-50 hover:text-navy-900 dark:hover:bg-navy-700 dark:hover:text-white"
      >
        <X className="h-4 w-4" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}
