import type { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  muted?: boolean;
  containerClassName?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}
