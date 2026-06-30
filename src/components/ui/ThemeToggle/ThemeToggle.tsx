import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/helpers';
import type { ThemeToggleProps } from './ThemeToggle.types';

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-navy-700 transition-colors',
        'hover:bg-navy-50 hover:text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500',
        'dark:text-navy-100 dark:hover:bg-navy-800 dark:hover:text-white',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: -16, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 16, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon className="h-5 w-5 text-gold-400" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: -16, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 16, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun className="h-5 w-5 text-gold-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
