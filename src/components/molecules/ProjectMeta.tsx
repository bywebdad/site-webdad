import type { FC } from 'react';

export type ProjectMetaProps = {
  client?: string;
  year?: number;
  stack?: string[];
  className?: string;
};

const ProjectMeta: FC<ProjectMetaProps> = ({ client, year, stack = [], className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300 ${className}`}>
      {client && (
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden />
          Клиент: <strong className="font-medium text-gray-900 dark:text-white">{client}</strong>
        </span>
      )}
      {typeof year === 'number' && (
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden />
          Год: <strong className="font-medium text-gray-900 dark:text-white">{year}</strong>
        </span>
      )}
      {stack.length > 0 && (
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden />
          Технологии: <span className="font-medium text-gray-900 dark:text-white">{stack.join(', ')}</span>
        </span>
      )}
    </div>
  );
};

export default ProjectMeta;
