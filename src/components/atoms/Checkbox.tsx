"use client";

import * as React from "react";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isInvalid?: boolean;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", isInvalid = false, ...props }, ref) => {
    const base =
      "h-5 w-5 rounded border transition focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:bg-zinc-900";
    const borders = isInvalid
      ? "border-red-500 focus:ring-red-500"
      : "border-slate-300 dark:border-zinc-700";

    return (
      <input
        ref={ref}
        type="checkbox"
        className={[base, borders, className].join(" ")}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";
