import type { FC } from 'react';
import Image from 'next/image';
import DateText from '@atoms/DateText';

export type BlogAuthor = {
  name: string;
  avatarSrc?: string;
};

export type BlogCardProps = {
  title: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  author?: BlogAuthor;
  className?: string;
};

const BlogCard: FC<BlogCardProps> = ({
  title,
  href = '#',
  imageSrc,
  imageAlt,
  date,
  author,
  className = '',
}) => {
  return (
    <article
      className={`group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg dark:bg-gray-900 ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" aria-hidden />
      </div>

      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="mb-2 flex items-center gap-3 text-sm text-white/90">
          <DateText date={date} className="shrink-0" />
          {author && (
            <>
              <span className="select-none text-white/50">•</span>
              <span className="inline-flex items-center gap-2">
                {author.avatarSrc ? (
                  <Image
                    src={author.avatarSrc}
                    alt={author.name}
                    width={24}
                    height={24}
                    className="size-6 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex size-6 items-center justify-center rounded-full bg-white/20 text-[10px] font-medium text-white">
                    {author.name?.[0]?.toUpperCase()}
                  </span>
                )}
                <span className="truncate text-white/90">{author.name}</span>
              </span>
            </>
          )}
        </div>

        <h3 className="text-lg font-semibold leading-6 text-white">
          <a
            href={href}
            aria-label={title}
            tabIndex={0}
            className="outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950"
          >
            <span className="absolute inset-0" aria-hidden />
            {title}
          </a>
        </h3>
      </div>

      <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm outline outline-black/5 dark:outline-white/5" aria-hidden />
    </article>
  );
};

export default BlogCard;
