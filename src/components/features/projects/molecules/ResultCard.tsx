import type { FC, ReactNode } from 'react';

export type ResultCardProps = {
  title: string;
  description: string;
  tags?: string[];
  art?: ReactNode; // декоративный превью-блок вверху
  colSpanMd?: 1 | 2; // кол-во колонок на md
  variant?: 'light' | 'dark'; // оставляем для совместимости, но стили адаптируются автоматически через dark:
  className?: string;
};

const ResultCard: FC<ResultCardProps> = ({
  title,
  description,
  tags = [],
  art,
  colSpanMd = 1,
  variant = 'dark',
  className = '',
}) => {
  const colClass = colSpanMd === 2 ? 'md:col-span-2' : '';

  const rootBase = 'rounded-lg overflow-hidden transition-all border';
  const rootAutoTone = [
    // светлая тема
    'bg-white border-black/5 shadow-sm hover:shadow-md hover:border-brand-500/40',
    // тёмная тема
    'dark:bg-neutral-900 dark:border-white/10 dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:hover:border-brand-500/50',
  ].join(' ');
  const rootClasses = [rootBase, rootAutoTone, colClass, className].join(' ');

  const previewBg = 'bg-gray-50 dark:bg-neutral-800';
  const titleColor = 'text-gray-900 dark:text-white';
  const descColor = 'text-gray-700 dark:text-white/70';
  const tagText = 'text-brand-700 dark:text-brand-200';

  return (
    <article
      className={rootClasses}
      aria-label={title}
    >
      {/* Превью (16:9) */}
      <div className={`relative ${previewBg} p-4`}>
        <div className="relative w-full pt-[56.25%]">
          <div className="absolute inset-0">{art}</div>
        </div>
      </div>

      {/* Текст */}
      <div className="p-5 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          {/* Акцентная точка */}
          <span className="inline-block w-3 h-3 rounded-full bg-brand-500" aria-hidden />
          <h3 className={`${titleColor} text-xl md:text-2xl font-semibold leading-snug tracking-tight`}>{title}</h3>
        </div>
        <p className={`${descColor} text-sm mb-3`}>{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap text-[10px] gap-1 mt-auto">
            {tags.map((t) => (
              <span
                key={t}
                className={`px-1.5 py-0.5 rounded-full border border-brand-500/30 ${tagText}`}
                aria-label={`тег ${t}`}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ResultCard;
