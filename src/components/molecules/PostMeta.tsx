import type { FC } from 'react';
import Image from 'next/image';
import DateText from '@atoms/DateText';

export type PostMetaProps = {
  date: string;
  authorName?: string;
  authorAvatarSrc?: string;
  className?: string;
};

const PostMeta: FC<PostMetaProps> = ({ date, authorName, authorAvatarSrc, className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300 ${className}`}>
      <DateText date={date} className="shrink-0" />
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
