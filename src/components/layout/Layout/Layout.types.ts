import type { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
  transparentNav?: boolean;
  className?: string;
  hideFooter?: boolean;
}
