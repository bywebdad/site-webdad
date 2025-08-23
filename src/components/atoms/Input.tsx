"use client";

import * as React from "react";

export type InputVariant = 'default' | 'glass';
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isInvalid?: boolean;
  variant?: InputVariant;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", isInvalid = false, variant = 'default', ...props }, ref) => {
    const common = "w-full rounded-md transition focus:outline-none h-11 px-3";
    const baseDefault =
      "border bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500";
    const baseGlass =
      "border bg-white/60 dark:bg-white/10 backdrop-blur-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/60 focus:ring-2 focus:ring-brand focus:ring-offset-0";

    const borders = isInvalid
      ? "border-red-500 focus:ring-red-500"
      : variant === 'glass'
      ? "border-slate-300 dark:border-white/20"
      : "border-slate-300 dark:border-zinc-700";

    const base = variant === 'glass' ? baseGlass : baseDefault;

    return (
      <input
        ref={ref}
        className={[common, base, borders, className].join(" ")}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
