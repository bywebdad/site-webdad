// Утилиты для оптимизации производительности

// Функция для предзагрузки критически важных ресурсов
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Предзагружаем критически важные изображения
    const criticalImages = [
      '/brand/Logo.webp',
      '/brand/01.webp'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Предзагружаем критически важные шрифты
    const criticalFonts: string[] = [
      // Добавьте пути к критически важным шрифтам, если они есть
    ];

    criticalFonts.forEach((src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

// Функция для ленивой загрузки ресурсов
export const lazyLoadResource = (src: string, type: 'script' | 'style' = 'script'): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    let element: HTMLScriptElement | HTMLLinkElement;

    if (type === 'script') {
      element = document.createElement('script');
      (element as HTMLScriptElement).src = src;
      (element as HTMLScriptElement).async = true;
    } else {
      element = document.createElement('link');
      (element as HTMLLinkElement).rel = 'stylesheet';
      (element as HTMLLinkElement).href = src;
    }

    element.onload = () => resolve();
    element.onerror = () => reject(new Error(`Failed to load ${src}`));

    document.head.appendChild(element);
  });
};

// Функция для оптимизации изображений
export const getOptimizedImageProps = (
  src: string,
  width: number,
  height: number,
  priority = false
) => {
  return {
    src,
    width,
    height,
    priority,
    quality: priority ? 95 : 85,
    sizes: priority 
      ? '(max-width: 768px) 100vw, 50vw'
      : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
  };
};

// Функция для дебаунса
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Функция для троттлинга
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Функция для проверки поддержки WebP
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Функция для измерения производительности
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};
