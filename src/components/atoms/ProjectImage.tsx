import type { FC } from 'react';
import Image from 'next/image';
import type { ProjectImageProps } from '@/types/project';

/**
 * Компонент изображения проекта с поддержкой тем и адаптивности
 * 
 * @param src - URL изображения
 * @param alt - Альтернативный текст для изображения
 * @param className - Дополнительные CSS классы
 * @param variant - Вариант темы ('light' | 'dark')
 * @param width - Ширина изображения (по умолчанию 1600)
 * @param height - Высота изображения (по умолчанию 1000)
 * @param sizes - Строка sizes для адаптивных изображений
 * @param priority - Приоритет загрузки изображения
 */

const ProjectImage: FC<ProjectImageProps> = ({
  src,
  alt = '',
  className = '',
  variant = 'light',
  width = 1600,
  height = 1000,
  sizes = "(min-width: 1024px) 57rem, 100vw",
  priority = false,
}) => {
  const frameClasses = variant === 'light'
    ? 'bg-gray-900 ring-gray-400/10 dark:bg-neutral-800 dark:ring-white/10'
    : 'bg-neutral-800 ring-white/10';

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={`w-full max-w-[48rem] sm:max-w-[57rem] h-auto rounded-xl shadow-xl ring-1 ${frameClasses} ${className}`}
    />
  );
};

export default ProjectImage;
