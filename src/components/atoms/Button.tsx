import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base = 'inline-flex items-center justify-center gap-2 rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition';
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-600 focus-visible:ring-brand',
  secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-400',
  ghost: 'bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400',
  gradient: 'bg-gradient-to-r from-brand to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 focus-visible:ring-brand shadow-lg transition-transform will-change-transform hover:scale-[1.02]'
};
const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-lg',
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    ...rest
  } = props;
  const v = variant as ButtonVariant;
  const s = size as ButtonSize;
  const classes = `${base} ${variants[v]} ${sizes[s]} ${className}`;
  return <button {...rest} className={classes} />;
};

export default Button;
