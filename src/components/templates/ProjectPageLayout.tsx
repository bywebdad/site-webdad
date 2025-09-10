import type { FC } from 'react';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import type { ProjectPageLayoutProps } from '@/types/project';

/**
 * Универсальный макет для страниц проектов
 * 
 * @param children - Дочерние элементы (обычно ProjectHero, ProjectResults, ProjectOverview)
 * @param className - Дополнительные CSS классы для основного контейнера
 */

const ProjectPageLayout: FC<ProjectPageLayoutProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white ${className}`}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPageLayout;
