"use client";

import * as React from "react";

export type ContactPersonProps = {
  photoSrc: string;
  name: string;
  role?: string;
  className?: string;
  children?: React.ReactNode;
  photoSize?: 'sm' | 'md' | 'lg' | 'xl';
};

const ContactPerson: React.FC<ContactPersonProps> = ({ photoSrc, name, role = "", className = "", children, photoSize = 'md' }) => {
  const sizeClass =
    photoSize === 'sm' ? 'h-12 w-12' :
    photoSize === 'lg' ? 'h-24 w-24' :
    photoSize === 'xl' ? 'h-28 w-28' :
    'h-16 w-16';
  return (
    <div className={["flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-800", className].join(" ")}
         role="complementary" aria-label="Контактное лицо">
      <img
        src={photoSrc}
        alt={name}
        className={[sizeClass, "rounded-full object-cover ring-2 ring-brand"].join(" ")}
        loading="lazy"
      />
      <div className="space-y-1">
        <div className="flex flex-col">
          <span className="text-base font-semibold text-slate-900 dark:text-zinc-100">{name}</span>
          {role ? (
            <span className="text-sm text-slate-600 dark:text-zinc-400">{role}</span>
          ) : null}
        </div>
        {children ? (
          <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-300">{children}</p>
        ) : null}
      </div>
    </div>
  );
};

export default ContactPerson;
