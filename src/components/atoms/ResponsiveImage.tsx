'use client';

import Image from 'next/image';
import { useState } from 'react';
import { 
  getOptimizedImageConfig, 
  calculateOptimalSize, 
  getOptimalQuality,
  generatePlaceholder 
} from '@lib/image-optimizer';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  quality?: number;
  containerWidth?: number;
  containerHeight?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  fill = false,
  quality,
  containerWidth,
  containerHeight,
  objectFit = 'cover',
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Получаем оптимизированную конфигурацию для известных изображений
  const optimizedConfig = getOptimizedImageConfig(src);
  
  // Определяем финальные размеры
  let finalWidth = width;
  let finalHeight = height;
  let finalSizes = sizes;
  let finalQuality = quality;
  let finalPriority = priority;

  if (optimizedConfig) {
    finalWidth = finalWidth || optimizedConfig.dimensions.width;
    finalHeight = finalHeight || optimizedConfig.dimensions.height;
    finalSizes = finalSizes || optimizedConfig.sizes;
    finalQuality = finalQuality || optimizedConfig.quality;
    finalPriority = finalPriority || optimizedConfig.priority || false;
  }

  // Если заданы размеры контейнера, рассчитываем оптимальные размеры
  if (containerWidth && containerHeight && !finalWidth && !finalHeight) {
    // Для /brand/01.webp используем примерные пропорции нового изображения (16:10)
    if (src === '/brand/01.webp') {
      const optimal = calculateOptimalSize(1600, 1000, containerWidth, containerHeight);
      finalWidth = optimal.width;
      finalHeight = optimal.height;
    } else {
      finalWidth = containerWidth;
      finalHeight = containerHeight;
    }
  }

  // Устанавливаем качество по умолчанию
  if (!finalQuality) {
    finalQuality = getOptimalQuality(src, finalPriority);
  }

  // Устанавливаем sizes по умолчанию
  if (!finalSizes) {
    finalSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded ${className}`}
        style={finalWidth && finalHeight ? { width: finalWidth, height: finalHeight } : undefined}
      >
        <span className="text-gray-500 text-sm">Изображение недоступно</span>
      </div>
    );
  }

  const imageClasses = `
    transition-opacity duration-300 opacity-0
    ${fill ? `object-${objectFit}` : `object-${objectFit}`}
  `.trim();

  const loadedImageClasses = `
    transition-opacity duration-300 opacity-100
    ${fill ? `object-${objectFit}` : `object-${objectFit}`}
  `.trim();

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        fill={fill}
        priority={finalPriority}
        sizes={finalSizes}
        quality={finalQuality}
        className={isLoading ? imageClasses : loadedImageClasses}
        onLoad={handleLoad}
        onError={handleError}
        placeholder="blur"
        blurDataURL={
          finalWidth && finalHeight 
            ? generatePlaceholder(finalWidth, finalHeight)
            : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        }
      />
    </div>
  );
};

export default ResponsiveImage;
