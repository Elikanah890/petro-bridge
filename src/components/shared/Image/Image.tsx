import { useState } from 'react';
import { cn } from '@/lib/helpers';
import type { ImageProps } from './Image.types';

const aspectClasses: Record<NonNullable<ImageProps['aspectRatio']>, string> = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-video',
  '3/2': 'aspect-[3/2]',
  '21/9': 'aspect-[21/9]',
};

const FALLBACK =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="100%25" height="100%25" fill="%230B1A33"/%3E%3C/svg%3E';

export function Image({
  src,
  alt,
  className,
  width,
  height,
  fallback = FALLBACK,
  loading = 'lazy',
  aspectRatio,
  objectFit = 'cover',
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-navy-100 dark:bg-navy-800',
        aspectRatio && aspectClasses[aspectRatio],
        className
      )}
    >
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-navy-100 dark:bg-navy-800" />
      )}
      <img
        src={errored ? fallback : src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={cn(
          'h-full w-full transition-opacity duration-500',
          objectFit === 'cover' ? 'object-cover' : 'object-contain',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
}
