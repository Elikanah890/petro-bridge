import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/helpers';
import type { ModalProps } from './Modal.types';

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  trigger,
  className,
  showClose = true,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-navy-950/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={cn(
                  'fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2',
                  'rounded-2xl bg-white p-6 shadow-2xl focus:outline-none',
                  'dark:bg-navy-800 dark:text-white',
                  className
                )}
              >
                {(title || showClose) && (
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      {title && (
                        <Dialog.Title className="text-xl font-bold text-navy-900 dark:text-white">
                          {title}
                        </Dialog.Title>
                      )}
                      {description && (
                        <Dialog.Description className="mt-1 text-sm text-navy-500 dark:text-navy-300">
                          {description}
                        </Dialog.Description>
                      )}
                    </div>
                    {showClose && (
                      <Dialog.Close
                        className="rounded-full p-1.5 text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-900 dark:text-navy-300 dark:hover:bg-navy-700 dark:hover:text-white"
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </Dialog.Close>
                    )}
                  </div>
                )}
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
