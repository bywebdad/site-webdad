import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import ProjectMeta from '@molecules/ProjectMeta';

export type ProjectHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode; // для дополнительных метаданных под заголовком
  client?: string;
  year?: number;
  stack?: string[];
};

const ProjectHero: FC<ProjectHeroProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  className = '',
  children,
  client,
  year,
  stack,
}) => {
  const headingId = 'project-hero-title';

  return (
    <section
      aria-labelledby={headingId}
      className={`bg-white dark:bg-gray-900 py-10 md:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Левая колонка: заголовок */}
        <div>
          <h1
            id={headingId}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white"
            tabIndex={0}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{subtitle}</p>
          )}
          {children && <div className="mt-5">{children}</div>}
          <div className="mt-5">
            <ProjectMeta client={client} year={year} stack={stack} />
          </div>
        </div>

        {/* Правая колонка: картинка */}
        <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm">
          <div className="relative aspect-[16/10] lg:aspect-[4/3]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
