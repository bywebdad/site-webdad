import { useCallback, useRef } from 'react';

/**
 * Хук для throttling функций с использованием requestAnimationFrame
 * Помогает избежать layout thrashing при частых обновлениях DOM
 */
export function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 16 // ~60fps
): T {
  const lastRun = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();
      
      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastRun.current = Date.now();
        }, delay - (now - lastRun.current));
      }
    }) as T,
    [callback, delay]
  );
}

/**
 * Хук для debouncing с requestAnimationFrame
 * Оптимизирован для DOM операций
 */
export function useRAFThrottle<T extends (...args: any[]) => void>(
  callback: T
): T {
  const rafRef = useRef<number | undefined>(undefined);

  return useCallback(
    ((...args: Parameters<T>) => {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        callback(...args);
      });
    }) as T,
    [callback]
  );
}
