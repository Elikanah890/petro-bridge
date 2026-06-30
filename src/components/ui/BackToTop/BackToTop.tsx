import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { cn } from '@/lib/helpers';
import type { BackToTopProps } from './BackToTop.types';

export function BackToTop({ className, threshold = 400 }: BackToTopProps) {
  const { scrollToTop } = useScrollTo();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={cn(
            'fixed bottom-24 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full',
            'bg-gold-500 text-navy-900 shadow-gold',
            'hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2',
            className
          )}
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
