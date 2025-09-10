import type { FC } from 'react';
import SectionHeading from '@atoms/SectionHeading';
import type { ProjectHeaderProps } from '@/types/project';

/**
 * Компонент заголовка проекта с поддержкой eyebrow, заголовка и вводного текста
 * 
 * @param eyebrow - Небольшой текст над заголовком
 * @param title - Основной заголовок
 * @param intro - Вводный текст под заголовком
 * @param variant - Вариант темы ('light' | 'dark')
 * @param headingId - ID для заголовка (для accessibility)
 * @param className - Дополнительные CSS классы
 */

const ProjectHeader: FC<ProjectHeaderProps> = ({
  eyebrow,
  title,
  intro,
  variant = 'light',
  headingId = 'project-overview-heading',
  className = '',
}) => {
  const eyebrowColor = variant === 'light' 
    ? 'text-brand-600 dark:text-brand-300' 
    : 'text-brand-300';
  const titleColor = variant === 'light' 
    ? 'text-gray-900 dark:text-white' 
    : 'text-white';
  const introColor = variant === 'light' 
    ? 'text-gray-700 dark:text-gray-300' 
    : 'text-gray-300';

  return (
    <div className={`lg:max-w-lg ${className}`}>
      {eyebrow && (
        <p className={`text-base/7 font-semibold ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <SectionHeading 
        id={headingId} 
        as="h2" 
        size="lg" 
        align="left" 
        className={`mt-2 text-pretty ${titleColor}`}
      >
        {title}
      </SectionHeading>
      {intro && (
        <p className={`mt-6 text-xl/8 ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
};

export default ProjectHeader;
