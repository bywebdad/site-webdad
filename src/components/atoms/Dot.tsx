import type { FC, MouseEvent, KeyboardEvent } from 'react';

type DotProps = {
  active?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  controlsId?: string;
};

const Dot: FC<DotProps> = ({ active = false, onClick, ariaLabel = 'Переключить карточку', controlsId }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-controls={controlsId}
      aria-pressed={active}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={[
        'rounded-full transition-all',
        active
          ? 'w-4 h-4 scale-110 bg-slate-900 dark:bg-white'
          : 'w-2 h-2 bg-slate-400 hover:bg-slate-500 dark:bg-gray-600 dark:hover:bg-gray-300',
      ].join(' ')}
    />
  );
};

export default Dot;
