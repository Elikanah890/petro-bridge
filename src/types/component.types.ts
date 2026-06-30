import { ReactNode } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
}

export interface AnimatedProps extends BaseComponentProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}

export interface StaggerProps extends BaseComponentProps {
  staggerDelay?: number;
  staggerChildren?: number;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallback?: string;
  loading?: 'lazy' | 'eager';
}
