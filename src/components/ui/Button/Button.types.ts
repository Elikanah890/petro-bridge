import type { ButtonVariant, ButtonSize } from '@/types/component.types';
import type { ReactNode } from 'react';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}
