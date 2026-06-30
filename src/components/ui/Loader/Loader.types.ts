export type LoaderSize = 'sm' | 'md' | 'lg';

export interface LoaderProps {
  size?: LoaderSize;
  className?: string;
  fullScreen?: boolean;
  label?: string;
}
