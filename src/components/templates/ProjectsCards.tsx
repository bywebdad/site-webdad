import type { FC } from 'react';
import Link from 'next/link';
import ProjectCard, { type ProjectCardProps } from '@molecules/ProjectCard';

export type ProjectsCardsProps = {
  id?: string;
  items?: Array<Pick<ProjectCardProps, 'title' | 'description' | 'imageUrl' | 'ctaVariant' | 'href'>>;
  className?: string;
  showAllButton?: boolean;
  allHref?: string;
  allLabel?: string;
};

const defaultItems: ProjectsCardsProps['items'] = [
  {
    title: 'Purpose-built for product development',
    description: 'Issues, docs, and sprints in one focused surface.',
    imageUrl:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61b8e1b5-22b1-4280-8ced-ed3ee0678a32_1600w.jpg',
    ctaVariant: 'plus',
  },
  {
    title: 'Designed to move fast',
    description: 'Keyboard-first, zero-friction navigation and editing.',
    imageUrl:
      'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/78877756-9e45-410e-b630-78c3dfb8e94c_1600w.jpg',
    ctaVariant: 'plus',
    href: '#',
  },
  {
    title: 'Crafted with care',
    description: 'Polished UI, predictable workflows, fewer surprises.',
    imageUrl:
      'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f29f67f-c043-4d68-9a80-d6f2dc0770fd_800w.jpg',
    ctaVariant: 'plus',
  },
];

const ProjectsCards: FC<ProjectsCardsProps> = ({
  id = 'cards',
  items = defaultItems,
  className = '',
  showAllButton = false,
  allHref = '/projects',
  allLabel = 'Смотреть все проекты',
}) => {
  return (
    <section id={id} className={`mt-4 md:mt-8 ${className}`} aria-label="Карточки проектов">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              ctaVariant={item.ctaVariant}
              href={item.href}
              className=""
            />
          ))}
        </div>
        {showAllButton ? (
          <div className="mt-6 md:mt-8 flex justify-center">
            <Link
              href={allHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 dark:bg-jungle-500 px-4 py-2 text-sm font-medium text-brand-500 dark:text-neutral-900 shadow-sm hover:bg-brand-600 dark:hover:bg-jungle-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:focus-visible:ring-jungle-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 transition-colors duration-200"
              aria-label={allLabel}
            >
              {allLabel}
              <span aria-hidden className="-mr-1">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsCards;
