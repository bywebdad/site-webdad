import type { FC, ReactNode } from 'react';

export type FilterChipProps = {
  as?: 'a' | 'button';
  href?: string;
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

const FilterChip: FC<FilterChipProps> = ({
  as = 'a',
  href = '#',
  onClick,
  selected = false,
  children,
  ariaLabel,
  className = '',
}) => {
  const base =
    'inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950';
  const styles = selected
    ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-400/10 dark:text-indigo-300'
    : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800';

  if (as === 'button') {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        aria-label={ariaLabel}
        tabIndex={0}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      aria-current={selected ? 'true' : undefined}
      aria-label={ariaLabel}
      tabIndex={0}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
};

export default FilterChip;
