import type { FC } from 'react';
import Image from 'next/image';
import PostMeta from '@molecules/PostMeta';

export type ArticleProps = {
  title: string;
  excerpt?: string;
  coverSrc?: string;
  coverAlt?: string;
  date: string;
  authorName?: string;
  authorAvatarSrc?: string;
  content: string[];
};

const Article: FC<ArticleProps> = ({
  title,
  excerpt,
  coverSrc,
  coverAlt = '',
  date,
  authorName,
  authorAvatarSrc,
  content,
}) => {
  const headingId = 'article-title';

  return (
    <section className="bg-white py-12 dark:bg-gray-900 sm:py-16" aria-labelledby={headingId}>
      <div className="mx-auto max-w-3xl px-6 lg:max-w-4xl lg:px-8">
        <header className="mb-8">
          <h1
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            tabIndex={0}
          >
            {title}
          </h1>
          {excerpt && (
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{excerpt}</p>
          )}
          <div className="mt-5">
            <PostMeta
              date={date}
              authorName={authorName}
              authorAvatarSrc={authorAvatarSrc}
            />
          </div>
        </header>

        {coverSrc && (
          <figure className="mb-10 overflow-hidden rounded-2xl border border-black/5 shadow-sm dark:border-white/10">
            <Image
              src={coverSrc}
              alt={coverAlt}
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-auto w-full object-cover"
              priority={false}
            />
          </figure>
        )}

        <article className="prose prose-slate mx-auto max-w-none dark:prose-invert prose-headings:scroll-mt-24">
          {content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Article;
