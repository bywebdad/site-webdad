'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
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
}

// Функция для получения оптимальных размеров изображения
const getOptimalImageSize = (
  originalWidth: number,
  originalHeight: number,
  containerWidth: number,
  containerHeight: number
) => {
  const aspectRatio = originalWidth / originalHeight;
  const containerAspectRatio = containerWidth / containerHeight;

  let optimalWidth: number;
  let optimalHeight: number;

  if (aspectRatio > containerAspectRatio) {
    // Изображение шире контейнера
    optimalWidth = containerWidth;
    optimalHeight = Math.round(containerWidth / aspectRatio);
  } else {
    // Изображение выше контейнера
    optimalHeight = containerHeight;
    optimalWidth = Math.round(containerHeight * aspectRatio);
  }

  return { width: optimalWidth, height: optimalHeight };
};

// Предустановленные размеры для популярных изображений
const PRESET_SIZES: Record<string, { width: number; height: number; sizes: string }> = {
  '/brand/01.webp': {
    width: 640,
    height: 466,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 640px, 800px'
  },
  '/brand/Logo.webp': {
    width: 200,
    height: 60,
    sizes: '(max-width: 768px) 150px, 200px'
  }
};

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  fill = false,
  quality = 85,
  containerWidth,
  containerHeight,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Получаем предустановленные размеры или используем переданные
  const preset = PRESET_SIZES[src];
  const finalWidth = width || preset?.width || containerWidth;
  const finalHeight = height || preset?.height || containerHeight;
  const finalSizes = sizes || preset?.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  // Если есть информация о контейнере и оригинальных размерах, оптимизируем
  let optimalSize;
  if (containerWidth && containerHeight && src === '/brand/01.webp') {
    optimalSize = getOptimalImageSize(1873, 1365, containerWidth, containerHeight);
  }

  const imageWidth = optimalSize?.width || finalWidth;
  const imageHeight = optimalSize?.height || finalHeight;

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
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={imageWidth && imageHeight ? { width: imageWidth, height: imageHeight } : undefined}
      >
        <span className="text-gray-500 text-sm">Изображение недоступно</span>
      </div>
    );
  }

  return (
    <div className={`relative ${isLoading ? 'animate-pulse bg-gray-200 dark:bg-gray-700' : ''} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        fill={fill}
        priority={priority}
        sizes={finalSizes}
        quality={quality}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${fill ? 'object-contain' : 'object-cover'}`}
        onLoad={handleLoad}
        onError={handleError}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  );
};

export default OptimizedImage;
