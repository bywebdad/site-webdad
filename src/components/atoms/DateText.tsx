import type { FC } from 'react';

export type DateTextProps = {
  date: string | number | Date;
  className?: string;
  locale?: string;
  /**
   * Customize formatting options. Defaults to: { year: 'numeric', month: 'long', day: 'numeric' }
   */
  formatOptions?: Intl.DateTimeFormatOptions;
};

const formatDate = (
  input: string | number | Date,
  locale: string,
  options?: Intl.DateTimeFormatOptions
): string => {
  try {
    const d = new Date(input);
    if (Number.isNaN(d.getTime())) return String(input);
    return new Intl.DateTimeFormat(locale, options ?? {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);
  } catch {
    return String(input);
  }
};

const DateText: FC<DateTextProps> = ({ date, className = '', locale = 'ru-RU', formatOptions }) => {
  let iso: string | undefined;
  try {
    const d = new Date(date);
    if (!Number.isNaN(d.getTime())) {
      iso = d.toISOString();
    }
  } catch {
    iso = undefined;
  }
  const label = `Дата публикации: ${formatDate(date, locale, formatOptions)}`;

  return (
    <time
      {...(iso ? { dateTime: iso } : {})}
      aria-label={label}
      tabIndex={0}
      className={`inline-block ${className}`}
    >
      {formatDate(date, locale, formatOptions)}
    </time>
  );
};

export default DateText;
