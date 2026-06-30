import { useState, useEffect, useRef, useCallback } from 'react';

export function useCounter(end: number, duration = 2000, startCounting = true) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    },
    [end, duration]
  );

  useEffect(() => {
    if (startCounting) {
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [startCounting, animate]);

  return count;
}
