import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import SectionHeading from '@atoms/SectionHeading';
import PatternGrid from '@atoms/PatternGrid';
import FeaturesList, { type Feature } from '@features/projects/molecules/FeaturesList';

export type ProjectOverviewProps = {
  eyebrow?: string; // маленький лейбл над заголовком
  title: string;
  intro?: string; // краткое вводное описание под заголовком
  image: { src: string; alt?: string; className?: string };
  content?: ReactNode[]; // параграфы основного текста (поддерживает JSX для выделений)
  features?: Feature[]; // список преимуществ
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

  const sectionBg = variant === 'light' ? 'bg-white dark:bg-gray-900' : 'bg-neutral-900';
  const eyebrowColor = variant === 'light' ? 'text-brand-600 dark:text-brand-300' : 'text-brand-300';
  const introColor = variant === 'light' ? 'text-gray-700 dark:text-gray-300' : 'text-gray-300';
  const bodyTextColor = variant === 'light' ? 'text-gray-600 dark:text-gray-300' : 'text-gray-300';
  const titleColor = variant === 'light' ? 'text-gray-900 dark:text-white' : 'text-white';
  const imageFrame =
    variant === 'light'
      ? 'bg-gray-900 ring-gray-400/10 dark:bg-neutral-800 dark:ring-white/10'
      : 'bg-neutral-800 ring-white/10';

  return (
    <section aria-labelledby={headingId} className={`relative isolate overflow-hidden lg:overflow-visible ${sectionBg} py-10 md:py-16 ${className}`}>
      {showPattern && (
        <PatternGrid
          strokeClassName={variant === 'light' ? 'stroke-gray-200 dark:stroke-white/10' : 'stroke-white/10'}
          fillClassName={variant === 'light' ? 'fill-gray-50 dark:fill-white/5' : 'fill-white/5'}
          svgClassName="h-[64rem] w-[128rem] mask-[radial-gradient(64rem_64rem_at_top,white,transparent)]"
        />
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Левая колонка — заголовок и лид */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                {eyebrow && (
                  <p className={`text-base/7 font-semibold ${eyebrowColor}`}>{eyebrow}</p>
                )}
                <SectionHeading id={headingId} as="h1" size="lg" align="left" className={`mt-2 text-pretty ${titleColor}`}>
                  {title}
                </SectionHeading>
                {intro && (
                  <p className={`mt-6 text-xl/8 ${introColor}`}>{intro}</p>
                )}
              </div>
            </div>
          </div>

          {/* Правая колонка — изображение (липкая) */}
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt ?? ''}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 48rem, 100vw"
              className={`w-[48rem] max-w-none rounded-xl shadow-xl ring-1 sm:w-[57rem] ${imageFrame} ${image.className ?? ''}`}
            />
          </div>

          {/* Левая колонка — основной текст и список фич */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className={`max-w-xl text-base/7 lg:max-w-lg ${bodyTextColor}`}>
                {content.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? '' : 'mt-8'}>
                    {paragraph}
                  </p>
                ))}

                {features.length > 0 && (
                  <FeaturesList
                    items={features}
                    textColorClass={variant === 'light' ? 'text-gray-700 dark:text-white/80' : 'text-white/80'}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
