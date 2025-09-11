/**
 * Утилиты для оптимизации производительности и предотвращения layout thrashing
 */

/**
 * Батчинг DOM операций для минимизации reflow/repaint
 */
export class DOMBatcher {
  private operations: (() => void)[] = [];
  private isScheduled = false;

  add(operation: () => void) {
    this.operations.push(operation);
    if (!this.isScheduled) {
      this.schedule();
    }
  }

  private schedule() {
    this.isScheduled = true;
    requestAnimationFrame(() => {
      // Выполняем все операции в одном кадре
      this.operations.forEach(op => op());
      this.operations = [];
      this.isScheduled = false;
    });
  }
}

/**
 * Кэш для getBoundingClientRect результатов
 */
export class RectCache {
  private cache = new WeakMap<Element, { rect: DOMRect; timestamp: number }>();
  private readonly TTL = 100; // 100ms TTL

  get(element: Element): DOMRect | null {
    const cached = this.cache.get(element);
    if (cached && Date.now() - cached.timestamp < this.TTL) {
      return cached.rect;
    }
    return null;
  }

  set(element: Element, rect: DOMRect) {
    this.cache.set(element, { rect, timestamp: Date.now() });
  }

  getBoundingClientRect(element: Element): DOMRect {
    const cached = this.get(element);
    if (cached) return cached;

    const rect = element.getBoundingClientRect();
    this.set(element, rect);
    return rect;
  }
}

/**
 * Глобальный экземпляр кэша
 */
export const rectCache = new RectCache();

/**
 * Оптимизированная функция для получения позиции мыши относительно элемента
 */
export function getRelativeMousePosition(
  event: MouseEvent | React.MouseEvent,
  element: Element
): { x: number; y: number } {
  // Используем offsetX/offsetY если доступны (более производительно)
  if ('offsetX' in event && 'offsetY' in event && typeof event.offsetX === 'number') {
    return { x: event.offsetX, y: event.offsetY };
  }

  // Fallback к getBoundingClientRect с кэшированием
  const rect = rectCache.getBoundingClientRect(element);
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

/**
 * Throttle функция с requestAnimationFrame
 */
export function rafThrottle<T extends (...args: any[]) => void>(fn: T): T {
  let rafId: number | null = null;
  
  return ((...args: Parameters<T>) => {
    if (rafId !== null) return;
    
    rafId = requestAnimationFrame(() => {
      fn(...args);
      rafId = null;
    });
  }) as T;
}

/**
 * Проверка поддержки CSS свойств для избежания лишних вычислений
 */
export const CSS_SUPPORT = {
  backdropFilter: CSS.supports('backdrop-filter', 'blur(1px)'),
  webkitBackdropFilter: CSS.supports('-webkit-backdrop-filter', 'blur(1px)'),
  transform3d: CSS.supports('transform', 'translate3d(0,0,0)'),
  willChange: CSS.supports('will-change', 'transform'),
};

/**
 * Оптимизированная функция для применения transform
 */
export function setTransform(element: HTMLElement, x: number, y: number) {
  if (CSS_SUPPORT.transform3d) {
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  } else {
    element.style.transform = `translate(${x}px, ${y}px)`;
  }
}
