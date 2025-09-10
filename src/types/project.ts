import type { ReactNode } from 'react';

/**
 * Варианты темы для компонентов проектов
 */
export type ProjectVariant = 'light' | 'dark';

/**
 * Базовые свойства для компонентов проектов
 */
export interface BaseProjectProps {
  variant?: ProjectVariant;
  className?: string;
}

/**
 * Свойства изображения проекта
 */
export interface ProjectImageData {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * Расширенные свойства изображения проекта
 */
export interface ProjectImageProps extends BaseProjectProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * Свойства заголовка проекта
 */
export interface ProjectHeaderProps extends BaseProjectProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  headingId?: string;
}

/**
 * Свойства контента проекта
 */
export interface ProjectContentProps extends BaseProjectProps {
  content: ReactNode[];
}

/**
 * Свойства секции проекта
 */
export interface ProjectSectionProps extends BaseProjectProps {
  children: ReactNode;
  showPattern?: boolean;
  ariaLabelledBy?: string;
}

/**
 * Свойства макета страницы проекта
 */
export interface ProjectPageLayoutProps {
  children: ReactNode;
  className?: string;
}
