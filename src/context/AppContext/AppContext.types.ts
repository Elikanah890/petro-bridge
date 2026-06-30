import type { ReactNode } from 'react';

export interface AppContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

export interface AppProviderProps {
  children: ReactNode;
}
