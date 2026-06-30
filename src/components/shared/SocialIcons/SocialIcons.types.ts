import type { SocialLink } from '@/types';

export interface SocialIconsProps {
  links?: SocialLink[];
  className?: string;
  iconClassName?: string;
  variant?: 'default' | 'solid';
}
