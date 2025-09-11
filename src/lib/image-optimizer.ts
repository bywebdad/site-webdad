// Утилиты для оптимизации изображений

interface ImageDimensions {
  width: number;
  height: number;
}

interface OptimizedImageConfig {
  src: string;
  alt: string;
  dimensions: ImageDimensions;
  sizes: string;
  priority?: boolean;
  quality?: number;
}

// Карта оптимизированных размеров для конкретных изображений
export const IMAGE_OPTIMIZATIONS: Record<string, OptimizedImageConfig> = {
  '/brand/01.webp': {
    src: '/brand/01.webp',
    alt: 'WebDad Brand Image',
    dimensions: { width: 640, height: 466 },
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 640px, 800px',
    priority: false,
    quality: 85
  },
  '/brand/Logo.webp': {
    src: '/brand/Logo.webp',
    alt: 'WebDad Logo',
    dimensions: { width: 200, height: 60 },
    sizes: '(max-width: 768px) 150px, 200px',
    priority: true,
    quality: 95
  }
};

// Функция для получения оптимизированной конфигурации изображения
export const getOptimizedImageConfig = (src: string): OptimizedImageConfig | null => {
  return IMAGE_OPTIMIZATIONS[src] || null;
};

// Функция для расчета оптимального размера на основе контейнера
export const calculateOptimalSize = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  maxHeight: number,
  maintainAspectRatio = true
): ImageDimensions => {
  if (!maintainAspectRatio) {
    return { width: maxWidth, height: maxHeight };
  }

  const aspectRatio = originalWidth / originalHeight;
  const maxAspectRatio = maxWidth / maxHeight;

  let width: number;
  let height: number;

  if (aspectRatio > maxAspectRatio) {
    // Изображение шире - ограничиваем по ширине
    width = Math.min(originalWidth, maxWidth);
    height = Math.round(width / aspectRatio);
  } else {
    // Изображение выше - ограничиваем по высоте
    height = Math.min(originalHeight, maxHeight);
    width = Math.round(height * aspectRatio);
  }

  return { width, height };
};

// Функция для генерации sizes атрибута
export const generateSizesAttribute = (breakpoints: Array<{ maxWidth: number; size: string }>): string => {
  const sizesArray = breakpoints.map(bp => `(max-width: ${bp.maxWidth}px) ${bp.size}`);
  return sizesArray.join(', ');
};

// Предустановленные breakpoints для разных типов изображений
export const BREAKPOINT_PRESETS = {
  hero: [
    { maxWidth: 640, size: '100vw' },
    { maxWidth: 1024, size: '100vw' },
    { maxWidth: 1280, size: '1024px' }
  ],
  card: [
    { maxWidth: 640, size: '100vw' },
    { maxWidth: 1024, size: '50vw' },
    { maxWidth: 1280, size: '33vw' }
  ],
  logo: [
    { maxWidth: 768, size: '150px' },
    { maxWidth: 1024, size: '200px' }
  ],
  thumbnail: [
    { maxWidth: 640, size: '25vw' },
    { maxWidth: 1024, size: '20vw' },
    { maxWidth: 1280, size: '15vw' }
  ]
};

// Функция для получения оптимального качества изображения
export const getOptimalQuality = (src: string, priority = false): number => {
  // Высокое качество для критических изображений
  if (priority) return 95;
  
  // Среднее качество для обычных изображений
  if (src.includes('/brand/') || src.includes('/hero/')) return 85;
  
  // Низкое качество для декоративных изображений
  return 75;
};

// Функция для проверки поддержки современных форматов
export const getOptimalFormat = (userAgent?: string): 'avif' | 'webp' | 'jpg' => {
  if (typeof window === 'undefined') return 'webp';
  
  // Проверяем поддержку AVIF
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    const avifSupported = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
    if (avifSupported) return 'avif';
  } catch (e) {
    // AVIF не поддерживается
  }
  
  // Проверяем поддержку WebP
  try {
    const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    if (webpSupported) return 'webp';
  } catch (e) {
    // WebP не поддерживается
  }
  
  return 'jpg';
};

// Функция для создания placeholder изображения
export const generatePlaceholder = (width: number, height: number): string => {
  // Создаем простой SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="sans-serif" font-size="14">
        ${width}×${height}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};
