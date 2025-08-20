import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type CaseCardProps = {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  className?: string;
};

const CaseCard: FC<CaseCardProps> = ({ title, category, imageSrc, imageAlt, href = '#', className = '' }) => {
  return (
    <article className={`group relative overflow-hidden rounded-2xl bg-gray-100 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg dark:bg-gray-900 ${className}`}>
      <div className="relative h-[22rem] w-full md:h-[26rem]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        {/* Декоративный градиент для читаемости внизу */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Кликабельная область: заголовок и категория */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <Link
          href={href}
          aria-label={title}
          className="outline-none"
        >
          <h2 className="line-clamp-2 text-xl font-semibold text-white drop-shadow-sm">
            {title}
          </h2>
        </Link>
        <p className="mt-1 text-sm font-medium uppercase tracking-wider text-indigo-300">
          {category}
        </p>
      </div>

      {/* Общий focus/hover оверлей в стиле карточек сайта */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 transition-all group-hover:ring-black/10 dark:ring-white/5 dark:group-hover:ring-white/10" />
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-purple-500 transition-opacity group-focus-within:opacity-100" />
    </article>
  );
};

export default CaseCard;
