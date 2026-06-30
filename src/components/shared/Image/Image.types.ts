export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  aspectRatio?: '1/1' | '4/3' | '16/9' | '3/2' | '21/9';
  objectFit?: 'cover' | 'contain';
}
