import type { FC } from 'react';
import Link from 'next/link';

export type ServiceCardProps = {
  title: string;
  description: string;
  img: string;
  alt: string;
  href?: string;
  className?: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, img: _img, alt: _alt, href = '#', className = '' }) => {
  return (
    <Link
      href={href}
      aria-label={`Перейти к услуге: ${title}`}
      className={`group relative block ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900`}
      tabIndex={0}
    >
      <div className="absolute inset-px rounded-2xl bg-white dark:bg-gray-900 border border-transparent transition-colors duration-200 group-hover:border-orange-500 group-focus-visible:border-orange-500 group-hover:border-2 dark:group-hover:border-jungle-500 dark:group-focus-visible:border-jungle-500" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="p-8 sm:p-10 pb-10 sm:pb-12">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">{title}</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 dark:text-gray-400 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm outline outline-black/5 dark:outline-white/5" />
    </Link>
  );
};

export default ServiceCard;
