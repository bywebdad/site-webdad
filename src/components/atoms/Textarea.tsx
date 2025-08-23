"use client";

import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  isInvalid?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", isInvalid = false, rows = 5, ...props }, ref) => {
    const base =
      "w-full rounded-md border bg-white text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500";
    const borders = isInvalid
      ? "border-red-500 focus:ring-red-500"
      : "border-slate-300 dark:border-zinc-700";

    return (
      <textarea
        ref={ref}
        rows={rows}
        className={[base, borders, "px-3 py-2", className].join(" ")}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
