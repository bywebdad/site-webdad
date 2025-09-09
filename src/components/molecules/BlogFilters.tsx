import type { FC } from 'react';
import FilterChip from '@atoms/FilterChip';

export type BlogFiltersProps = {
  basePath?: string;
  tags: Array<{ id: string; title: string }>;
  authors: Array<{ id: string; name: string }>;
  selectedTagId?: string;
  selectedAuthorId?: string;
  className?: string;
};

const buildHref = (
  basePath: string,
  next: { tag?: string; author?: string },
) => {
  const params = new URLSearchParams();
  if (next.tag) params.set('tag', next.tag);
  if (next.author) params.set('author', next.author);
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
};

const BlogFilters: FC<BlogFiltersProps> = ({
  basePath = '/blog',
  tags,
  authors,
  selectedTagId,
  selectedAuthorId,
  className = '',
}) => {
  return (
    <section className={`border-y border-black/5 bg-white py-6 dark:border-white/10 dark:bg-gray-900 ${className}`} aria-label="Фильтры блога">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2" aria-label="Фильтр по тегам">
            <span className="mr-2 text-sm font-medium text-gray-500 dark:text-gray-400">Теги:</span>
            <FilterChip
              href={buildHref(basePath, { author: selectedAuthorId })}
              selected={!selectedTagId}
              ariaLabel="Все теги"
            >
              Все
            </FilterChip>
            {tags.map((t) => (
              <FilterChip
                key={t.id}
                href={buildHref(basePath, { tag: t.id, author: selectedAuthorId })}
                selected={selectedTagId === t.id}
                ariaLabel={`Тег: ${t.title}`}
              >
                {t.title}
              </FilterChip>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2" aria-label="Фильтр по авторам">
            <span className="mr-2 text-sm font-medium text-gray-500 dark:text-gray-400">Авторы:</span>
            <FilterChip
              href={buildHref(basePath, { tag: selectedTagId })}
              selected={!selectedAuthorId}
              ariaLabel="Все авторы"
            >
              Все
            </FilterChip>
            {authors.map((a) => (
              <FilterChip
                key={a.id}
                href={buildHref(basePath, { author: a.id, tag: selectedTagId })}
                selected={selectedAuthorId === a.id}
                ariaLabel={`Автор: ${a.name}`}
              >
                {a.name}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;
