import { cn } from '@/lib/helpers';
import { Container } from '@/components/shared';
import { HeroBackground } from './HeroBackground';
import { HeroFloatingElements } from './HeroFloatingElements';
import { HeroContent } from './HeroContent';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import type { HeroProps } from './Hero.types';

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden pt-4 pb-16 sm:py-24',
        className
      )}
    >
      <HeroBackground />
      <HeroFloatingElements />

      <Container className="relative z-10">
        <HeroContent />
      </Container>

      <HeroScrollIndicator />
    </section>
  );
}
