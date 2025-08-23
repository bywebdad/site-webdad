"use client";

import * as React from "react";

export type ContactDetailsProps = {
  className?: string;
  variant?: "default" | "glass";
  layout?: "stack" | "inline";
  bordered?: boolean;
  leadText?: string;
};

const ContactDetails: React.FC<ContactDetailsProps> = ({ className = "", variant = "default", layout = "stack", bordered = true, leadText }) => {
  const cardBase = layout === "inline" ? "w-full" : "w-full rounded-xl p-4";
  const cardVariant =
    layout === "inline"
      ? "bg-transparent"
      : variant === "glass"
      ? bordered
        ? "bg-white/70 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-sm"
        : "bg-white/70 dark:bg-white/10 backdrop-blur-md"
      : bordered
      ? "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800"
      : "bg-white dark:bg-zinc-900";

  const textBase = variant === "glass" ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-zinc-100";

  const linkBase = "inline-flex items-center gap-2 text-sm text-slate-700 dark:text-zinc-200 hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1";

  const PhoneIcon = (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-brand">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 7.18 5.82 13 13 13h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.2a1.5 1.5 0 0 0-1.12-1.45l-2.63-.75a1.5 1.5 0 0 0-1.64.6l-.54.72a.75.75 0 0 1-1.17.06 12.1 12.1 0 0 1-3.36-3.36.75.75 0 0 1 .06-1.17l.72-.54a1.5 1.5 0 0 0 .6-1.64l-.75-2.63A1.5 1.5 0 0 0 8.7 5.5h-1.2A2.25 2.25 0 0 0 5.25 7.75v-1z" />
    </svg>
  );
  const MailIcon = (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-brand">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
  const TgIcon = (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-brand">
      <path d="M9.04 14.31 9 17a1 1 0 0 0 1.64.77l2.02-1.65 3.81 2.8c.7.51 1.69.13 1.88-.73l3.59-15.6c.21-.91-.69-1.68-1.55-1.31L1.2 7.74C.28 8.14.33 9.48 1.29 9.8l5.24 1.76 10.76-6.77-8.25 8.76Z" />
    </svg>
  );

  if (layout === "inline") {
    return (
      <div className={[cardBase, cardVariant, className].join(" ")} role="group" aria-label="Контактные данные">
        <div className="flex flex-col items-center gap-3">
          <span className="text-base font-semibold text-slate-900 dark:text-zinc-100">
            {leadText ?? "Вы можете связаться с нами:"}
          </span>
          <div className="flex flex-wrap text-base items-center justify-center gap-4">
            <a href="tel:+375293690077" className={linkBase} aria-label="Позвонить по телефону +375293690077">
              {PhoneIcon}
              +375293690077
            </a>
            <a href="mailto:info@webdad.by" className={linkBase} aria-label="Написать на почту info@webdad.by">
              {MailIcon}
              info@webdad.by
            </a>
            <a href="https://t.me/webdadby" target="_blank" rel="noopener noreferrer" className={linkBase} aria-label="Открыть Telegram @webdadby">
              {TgIcon}
              @webdadby
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={[cardBase, cardVariant, className].join(" ")}
         role="group"
         aria-label="Контактные данные">
      <h4 className={["text-base font-semibold mb-3", textBase].join(" ")}>Свяжитесь с нами</h4>
      <ul className="space-y-2">
        <li>
          <a
            href="tel:+375293690077"
            className={linkBase}
            aria-label="Позвонить по телефону +375293690077"
          >
            {PhoneIcon}
            <span className="sr-only">Телефон:</span>
            +375293690077
          </a>
        </li>
        <li>
          <a
            href="mailto:info@webdad.by"
            className={linkBase}
            aria-label="Написать на почту info@webdad.by"
          >
            {MailIcon}
            <span className="sr-only">Email:</span>
            info@webdad.by
          </a>
        </li>
        <li>
          <a
            href="https://t.me/webdadby"
            target="_blank"
            rel="noopener noreferrer"
            className={linkBase}
            aria-label="Открыть Telegram @webdadby"
          >
            {TgIcon}
            <span className="sr-only">Telegram:</span>
            @webdadby
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
