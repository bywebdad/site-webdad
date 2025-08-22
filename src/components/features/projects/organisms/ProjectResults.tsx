import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import ResultCard from '@features/projects/molecules/ResultCard';
import SectionHeading from '@atoms/SectionHeading';

export type ProjectResultItem = {
  title: string;
  description: string;
  tags?: string[];
  art?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  colSpanMd?: 1 | 2;
};

export type ProjectResultsProps = {
  title?: string;
  items: ProjectResultItem[];
  className?: string;
  variant?: 'light' | 'dark';
};

const ProjectResults: FC<ProjectResultsProps> = ({ title = 'Результаты', items, className = '', variant = 'light' }) => {
  const headingId = 'project-results-heading';
  const sectionTone =
    variant === 'light'
      ? 'bg-white dark:bg-gray-900 text-slate-900 dark:text-white'
      : 'bg-neutral-900 text-white';

  return (
    <section aria-labelledby={headingId} className={`py-10 md:py-16 ${sectionTone} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading id={headingId} as="h2" align="center" size="md" className="mb-10">
          {title}
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <ResultCard
              key={item.title}
              title={item.title}
              description={item.description}
              tags={item.tags}
              art={
                item.art ??
                (item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt ?? ''}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={(item.imageFit === 'contain' ? 'object-contain' : 'object-cover') + ' object-center'}
                    priority={false}
                  />
                ) : undefined)
              }
              colSpanMd={item.colSpanMd}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectResults;
