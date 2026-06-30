import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/helpers';
import type { WhatsAppButtonProps } from './WhatsAppButton.types';

export function WhatsAppButton({
  phone = SITE_CONFIG.whatsapp,
  message = 'Hello Petro Bridge Solutions, I would like to learn more about your petroleum logistics services.',
  className,
}: WhatsAppButtonProps) {
  const normalized = phone.replace(/[^\d]/g, '');
  const href = `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.6 }}
      className={cn(
          'fixed bottom-6 right-6 z-[95] flex h-14 w-14 items-center justify-center rounded-full',
        'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40',
        'animate-pulse-gold hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
        className
      )}
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}
