import { forwardRef, useId } from 'react';
import { cn } from '@/lib/helpers';
import type { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    error,
    helperText,
    icon,
    required,
    disabled,
    className,
    containerClassName,
    id,
    type = 'text',
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const describedBy = error
    ? `${inputId}-error`
    : helperText
      ? `${inputId}-helper`
      : undefined;

  return (
    <div className={cn('w-full', containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-navy-100"
        >
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 dark:text-navy-300">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            'h-11 w-full rounded-lg border bg-white px-3.5 text-sm text-navy-900 transition-colors',
            'placeholder:text-navy-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'dark:bg-navy-900 dark:text-white dark:placeholder:text-navy-400',
            icon && 'pl-10',
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-200 dark:border-red-500/70 dark:focus:ring-red-900/40'
              : 'border-navy-200 focus:border-navy-900 focus:ring-navy-100 dark:border-navy-700 dark:focus:border-gold-500 dark:focus:ring-navy-700',
            disabled && 'cursor-not-allowed opacity-60',
            className
          )}
          {...props}
        />
      </div>

      {error ? (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      ) : helperText ? (
        <p
          id={`${inputId}-helper`}
          className="mt-1.5 text-sm text-navy-500 dark:text-navy-300"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
});
