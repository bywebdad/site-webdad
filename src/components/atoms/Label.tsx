"use client";

import * as React from "react";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  requiredMark?: boolean;
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className = "", requiredMark, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={
          "block text-sm font-medium text-zinc-900 dark:text-zinc-100 " +
          className
        }
        {...props}
      >
        <span className="inline-flex items-center gap-1">
          {children}
          {requiredMark ? (
            <span aria-hidden className="text-red-600">*</span>
          ) : null}
        </span>
      </label>
    );
  }
);
Label.displayName = "Label";
