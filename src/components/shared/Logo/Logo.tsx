import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/helpers';
import type { LogoProps } from './Logo.types';

const heightMap = { sm: 52, md: 72, lg: 100 } as const;

export function Logo({
  size = 'md',
  className,
  onDark = false,
}: LogoProps) {
  const { theme } = useTheme();
  const isDark = onDark || theme === 'dark';
  const h = heightMap[size];

  return (
    <Link
      to="/"
      aria-label="Petro Bridge Solutions - Home"
      className={cn('inline-flex shrink-0 items-center', className)}
    >
      <img
        src="/logos/logo-cropped.png"
        alt="Petro Bridge Solutions"
        style={{
          height: `${h}px`,
          width: 'auto',
          filter: isDark ? 'brightness(0) saturate(100%) invert(1)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      />
    </Link>
  );
}
