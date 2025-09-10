import type { FC } from 'react';
import type { ProjectContentProps } from '@/types/project';

/**
 * Компонент контента проекта для отображения массива параграфов
 * 
 * @param content - Массив ReactNode элементов для отображения как параграфы
 * @param variant - Вариант темы ('light' | 'dark')
 * @param className - Дополнительные CSS классы
 */

const ProjectContent: FC<ProjectContentProps> = ({
  content,
  variant = 'light',
  className = '',
}) => {
  const textColor = variant === 'light' 
    ? 'text-gray-600 dark:text-gray-300' 
    : 'text-gray-300';

  return (
    <div className={`max-w-xl text-base/7 lg:max-w-lg ${textColor} ${className}`}>
      {content.map((paragraph, idx) => (
        <p key={idx} className={idx === 0 ? '' : 'mt-8'}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ProjectContent;
