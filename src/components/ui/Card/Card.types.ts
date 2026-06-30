export interface CardProps {
  className?: string;
  children?: React.ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
  onClick?: () => void;
}
