import type { FC, ReactNode } from 'react';
import ProjectSection from '@atoms/ProjectSection';
import ProjectImage from '@atoms/ProjectImage';
import ProjectHeader from '@molecules/ProjectHeader';
import ProjectContent from '@molecules/ProjectContent';
import FeaturesList, { type Feature } from '@features/projects/molecules/FeaturesList';

export type ProjectOverviewProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: { src: string; alt?: string; className?: string };
  content?: ReactNode[];
  features?: Feature[];
  variant?: 'light' | 'dark';
  showPattern?: boolean;
  className?: string;
};

const ProjectOverview: FC<ProjectOverviewProps> = ({
  eyebrow,
  title,
  intro,
  image,
  content = [],
  features = [],
  variant = 'light',
  showPattern = true,
  className = '',
}) => {
  const headingId = 'project-overview-heading';

  return (
    <ProjectSection
      variant={variant}
      showPattern={showPattern}
      ariaLabelledBy={headingId}
      className={`py-10 md:py-16 ${className}`}
    >
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Левая колонка — заголовок и лид */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-4">
              <ProjectHeader
                eyebrow={eyebrow}
                title={title}
                intro={intro}
                variant={variant}
                headingId={headingId}
              />
            </div>
          </div>

          {/* Правая колонка — изображение (липкая) */}
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <ProjectImage
              src={image.src}
              alt={image.alt}
              variant={variant}
              className={image.className}
            />
          </div>

          {/* Левая колонка — основной текст и список фич */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-4">
              <ProjectContent content={content} variant={variant} />
              {features.length > 0 && (
                <FeaturesList
                  items={features}
                  textColorClass={variant === 'light' ? 'text-gray-700 dark:text-white/80' : 'text-white/80'}
                />
              )}
            </div>
          </div>
        </div>
    </ProjectSection>
  );
};

export default ProjectOverview;
