"use client";
import type { FC, KeyboardEvent } from 'react';
import Link from 'next/link';

export type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  ctaVariant?: 'plus' | 'arrow';
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

const PlusIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const ArrowIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  ctaVariant = 'plus',
  href,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    if (href) return; // навигация обработается ссылкой
    onClick?.();
  };

  const DefaultIcon = ctaVariant === 'arrow' ? ArrowIcon : PlusIcon;
  const HoverIcon = ctaVariant === 'arrow' ? PlusIcon : ArrowIcon;

  const cardContent = (
    <>
      {/* Фон-картинка */}
      <div
        className="absolute inset-0 bg-cover bg-center [transition:transform_300ms_ease] group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden="true"
      />

      {/* Низ карточки */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug tracking-tight mb-1">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-3">{description}</p>
        {href ? (
          <Link
            href={href}
            className="group relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand dark:bg-jungle-500 text-white border border-brand dark:border-jungle-500 transition hover:bg-brand-600 group-hover:bg-brand-600 dark:group-hover:bg-jungle-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            aria-label={ariaLabel ?? `Перейти к проекту: ${title}`}
          >
            <span className="block group-hover:hidden">
              <DefaultIcon />
            </span>
            <span className="hidden group-hover:block">
              <HoverIcon />
            </span>
          </Link>
        ) : (
          <span
            className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white dark:bg-jungle-500 border border-brand dark:border-jungle-500 transition group-hover:bg-brand-600 dark:group-hover:bg-white"
            aria-hidden="true"
          >
            <span className="block group-hover:hidden">
              <DefaultIcon />
            </span>
            <span className="hidden group-hover:block">
              <HoverIcon />
            </span>
          </span>
        )}
      </div>
    </>
  );

  const rootClasses = [
    'group relative rounded-3xl overflow-hidden bg-neutral-900 h-80 shadow-xl border border-white/10',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
    className,
  ].join(' ');

  if (href) {
    return (
      <article className={rootClasses} aria-label={ariaLabel ?? title}>
        <Link href={href} className="absolute inset-0 z-0" aria-label={ariaLabel ?? title} />
        {cardContent}
      </article>
    );
  }

  return (
    <article
      className={rootClasses}
      role={onClick ? 'button' : undefined}
      tabIndex={0}
      aria-label={ariaLabel ?? title}
      onKeyDown={handleKeyDown}
      onClick={onClick}
    >
      {cardContent}
    </article>
  );
};

export default ProjectCard;
