import type { ReactNode } from 'react';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
