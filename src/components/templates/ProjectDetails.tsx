import type { FC } from 'react';
import Image from 'next/image';
import ProjectMeta from '@molecules/ProjectMeta';

export type ProjectDetailsProps = {
  title: string;
  summary?: string;
  coverSrc?: string;
  coverAlt?: string;
  client?: string;
  year?: number;
  stack?: string[];
  content: string[];
  gallery?: Array<{ src: string; alt?: string }>;
};

const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  summary,
  coverSrc,
  coverAlt = '',
  client,
  year,
  stack,
  content,
  gallery = [],
}) => {
  const headingId = 'project-title';

  return (
    <section className="bg-white py-10 dark:bg-gray-900 md:py-16" aria-labelledby={headingId}>
      <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl">
        <header className="mb-8">
          <h1
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            tabIndex={0}
          >
            {title}
          </h1>
          {summary && <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{summary}</p>}
          <div className="mt-5">
            <ProjectMeta client={client} year={year} stack={stack} />
          </div>
        </header>

        {coverSrc && (
          <figure className="mb-10 overflow-hidden rounded-2xl border border-black/5 shadow-sm dark:border-white/10">
            <Image
              src={coverSrc}
              alt={coverAlt}
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 960px, 100vw"
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

        {gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {gallery.map((img, i) => (
              <div key={`${img.src}-${i}`} className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
                <Image
                  src={img.src}
                  alt={img.alt ?? `Изображение ${i + 1}`}
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
