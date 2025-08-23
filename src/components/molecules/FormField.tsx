"use client";

import * as React from "react";
import { Label } from "@atoms/Label";

export type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

type FieldChildProps = {
  id?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required,
  hint,
  error,
  className = "",
  children,
}) => {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={["space-y-1", className].join(" ")}>      
      <Label htmlFor={id} requiredMark={required}>
        {label}
      </Label>
      {hint ? (
        <p id={`${id}-hint`} className="text-xs text-slate-500 dark:text-zinc-400">
          {hint}
        </p>
      ) : null}
      <div aria-live="polite" aria-atomic="true">
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<FieldChildProps>, {
              id,
              "aria-invalid": Boolean(error) || undefined,
              "aria-describedby": describedBy || undefined,
            })
          : children}
      </div>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
};
