import type { FC, ReactNode } from 'react';

export type TechCardProps = {
  category: string;
  title: string;
  description: string;
  bullets: readonly string[];
  ctaLabel?: string;
  icon: ReactNode;
  onClickCta?: () => void;
  className?: string;
};

const TechCard: FC<TechCardProps> = ({
  category,
  title,
  description,
  bullets,
  ctaLabel,
  icon,
  onClickCta,
  className = '',
}) => {
  return (
    <article
      className={[
        'relative h-96 rounded-2xl shadow-2xl border bg-white backdrop-blur-xl border-slate-200 dark:bg-white/5 dark:border-white/10',
        'flex flex-col p-6 text-slate-900 dark:text-white select-none',
        className,
      ].join(' ')}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-full bg-slate-100 border border-slate-200 dark:bg-white/10 dark:border-white/20">
          {icon}
        </div>
        <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-gray-300 font-medium">{category}</span>
      </div>

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-slate-600 dark:text-gray-300 mb-6 flex-1">{description}</p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm mb-6">
        {bullets.map((b) => (
          <div key={b} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-slate-400 dark:bg-gray-300 rounded-full" />
            <span className="text-slate-500 dark:text-gray-400">{b}</span>
          </div>
        ))}
      </div>

      {ctaLabel ? (
        <button
          type="button"
          onClick={onClickCta}
          className="w-full py-3 px-4 rounded-lg transition-colors border text-white bg-slate-900 hover:bg-slate-800 border-slate-900 dark:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </button>
      ) : null}
    </article>
  );
};

export default TechCard;
