import type { FC } from 'react';
import Image from 'next/image';

export type PostMetaProps = {
  date: string;
  authorName?: string;
  authorAvatarSrc?: string;
  className?: string;
};

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);
  } catch {
    return iso;
  }
};

const PostMeta: FC<PostMetaProps> = ({ date, authorName, authorAvatarSrc, className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300 ${className}`}>
      <time dateTime={date} className="shrink-0" aria-label={`Дата публикации: ${formatDate(date)}`}>
        {formatDate(date)}
      </time>
      {authorName && (
        <>
          <span className="select-none text-gray-400">•</span>
          <span className="inline-flex items-center gap-2" aria-label={`Автор: ${authorName}`}>
            {authorAvatarSrc ? (
              <Image
                src={authorAvatarSrc}
                alt={authorName}
                width={28}
                height={28}
                className="size-7 rounded-full object-cover"
                priority={false}
              />
            ) : (
              <span
                className="flex size-7 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                aria-hidden
              >
                {authorName?.[0]?.toUpperCase()}
              </span>
            )}
            <span className="truncate">{authorName}</span>
          </span>
        </>
      )}
    </div>
  );
};

export default PostMeta;
