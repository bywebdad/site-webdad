import { ButtonHTMLAttributes } from 'react';

interface DotProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  ariaLabel?: string;
}

const Dot = ({ active = false, ariaLabel, className = '', ...props }: DotProps) => {
  return (
    <button
      type="button"
      className={`
        w-3 h-3 rounded-full transition-all duration-200 ease-in-out
        ${active 
          ? 'bg-brand-500 dark:bg-jungle-500 scale-110' 
          : 'bg-slate-300 dark:bg-gray-600 hover:bg-slate-400 dark:hover:bg-gray-500'
        }
        focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-jungle-500 focus:ring-offset-2
        ${className}
      `.trim()}
      aria-label={ariaLabel}
      {...props}
    />
  );
};

export default Dot;