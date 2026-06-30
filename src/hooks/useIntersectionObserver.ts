import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && options?.threshold && (options.threshold as number) >= 0) {
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [options?.threshold, options?.rootMargin, options?.root]);

  return { ref, isIntersecting };
}
