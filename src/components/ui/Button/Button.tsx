import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/helpers';
import { type ButtonVariant, type ButtonSize } from '@/types';
import type { ButtonProps } from './Button.types';

const MotionLink = motion.create(Link);

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-card dark:bg-navy-700 dark:hover:bg-navy-600',
  secondary:
    'bg-white text-navy-900 border border-navy-900 hover:bg-navy-50 dark:bg-navy-800 dark:text-white dark:border-navy-600 dark:hover:bg-navy-700',
  outline:
    'bg-transparent text-white border border-white/70 hover:bg-white/10 hover:border-white',
  ghost:
    'bg-transparent text-navy-900 hover:bg-navy-50 dark:text-white dark:hover:bg-navy-800',
  gold: 'bg-gold-500 text-navy-900 hover:bg-gold-600 shadow-gold',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-12 px-8 text-base gap-2',
  xl: 'h-14 px-10 text-lg gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className,
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-lg font-semibold tracking-tight',
    'transition-colors duration-200 select-none',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    'disabled:opacity-60 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {!loading && icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  const motionProps = {
    whileHover: disabled || loading ? undefined : { scale: 1.02 },
    whileTap: disabled || loading ? undefined : { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:|wa\.me)/.test(href) || href.startsWith('//');

    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <MotionLink to={href} className={classes} onClick={onClick} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
