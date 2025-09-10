import type { FC } from 'react';
import PatternGrid from '@atoms/PatternGrid';
import type { ProjectSectionProps } from '@/types/project';

/**
 * Универсальная секция проекта с поддержкой паттернов и тем
 * 
 * @param children - Дочерние элементы для отображения внутри секции
 * @param variant - Вариант темы ('light' | 'dark')
 * @param showPattern - Показывать ли фоновый паттерн
 * @param className - Дополнительные CSS классы
 * @param ariaLabelledBy - ID элемента, который описывает секцию (для accessibility)
 */

const ProjectSection: FC<ProjectSectionProps> = ({
  children,
  variant = 'light',
  showPattern = false,
  className = '',
  ariaLabelledBy,
}) => {
  const sectionBg = variant === 'light' ? 'bg-white dark:bg-gray-900' : 'bg-neutral-900';

  return (
    <section 
      aria-labelledby={ariaLabelledBy} 
      className={`relative isolate overflow-hidden lg:overflow-visible ${sectionBg} ${className}`}
    >
      {showPattern && (
        <PatternGrid
          strokeClassName={variant === 'light' ? 'stroke-gray-200 dark:stroke-white/10' : 'stroke-white/10'}
          fillClassName={variant === 'light' ? 'fill-gray-50 dark:fill-white/5' : 'fill-white/5'}
          svgClassName="h-[64rem] w-[128rem] mask-[radial-gradient(64rem_64rem_at_top,white,transparent)]"
        />
      )}
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
};

export default ProjectSection;
