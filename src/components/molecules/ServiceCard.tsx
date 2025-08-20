import type { FC } from 'react';

export type ServiceCardProps = {
  title: string;
  description: string;
  img: string;
  alt: string;
  className?: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, img, alt, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-px rounded-2xl bg-white dark:bg-gray-900" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">{title}</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 dark:text-gray-400 max-lg:text-center">
            {description}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center px-8 sm:px-10 lg:pb-2 max-lg:py-10">
          <img
            src={img}
            alt={alt}
            className="w-full max-lg:max-w-xs"
            loading="lazy"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm outline outline-black/5 dark:outline-white/5" />
    </div>
  );
};

export default ServiceCard;
