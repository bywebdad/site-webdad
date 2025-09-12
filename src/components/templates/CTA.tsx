'use client';
import type { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import GradientBlob from '@atoms/GradientBlob';
import ContactModal from '@molecules/ContactModal';
import ResponsiveImage from '@atoms/ResponsiveImage';

export type CtaAction = {
  href: string;
  label: string;
  ariaLabel?: string;
};

type CTAProps = {
  id?: string;
  title?: string;
  description?: string;
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

const CTA: FC<CTAProps> = ({
  id = 'cta',
  title = 'Готовы к цифровому прорыву? ',
  description = 'Оставьте заявку — и мы бесплатно проконсультируем вас, подберём оптимальное решение и оценим стоимость проекта.',
  primaryAction = { href: '#', label: 'Оставить заявку' },
  secondaryAction = { href: '#', label: 'Learn more' },
  imageSrc = '/brand/01.webp',
  imageAlt = 'App screenshot',
  className = '',
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrimaryClick = () => {
    if (primaryAction.label === 'Оставить заявку') {
      setIsModalOpen(true);
      return;
    }
    if (!primaryAction?.href) return;
    router.push(primaryAction.href);
  };

  const handlePrimaryKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePrimaryClick();
    }
  };

  return (
    <section id={id} className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="w-full py-16 sm:py-24 lg:py-32">
        <div className="relative bg-white dark:bg-gray-900">
          <GradientBlob
            wrapperClassName="absolute inset-x-0 -top-64 z-0 transform-gpu blur-3xl pointer-events-none sm:-top-80"
            innerClassName="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr bg-[length:200%_200%] animate-gradient motion-reduce:animate-none opacity-40 dark:opacity-90 from-brand-200 to-brand-700 dark:from-brand-500 dark:to-jungle-700 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="hidden sm:block absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#radial-cta)" fillOpacity="0.35" />
            <defs>
              <radialGradient id="radial-cta">
                <stop stopColor="#FF7317" />
                <stop offset={1} stopColor="#FF7317" />
              </radialGradient>
            </defs>
          </svg>
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-24 lg:pt-0 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:py-32 lg:text-left lg:col-span-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-700 dark:text-gray-300">{description}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                type="button"
                aria-label={primaryAction.ariaLabel ?? primaryAction.label}
                onClick={handlePrimaryClick}
                onKeyDown={handlePrimaryKeyDown}
                className="inline-flex items-center justify-center gap-2 rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition bg-gradient-to-r from-brand to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 focus-visible:ring-brand shadow-lg transition-transform will-change-transform hover:scale-[1.02] dark:from-jungle-500 dark:hover:from-jungle-500 dark:to-jungle-700 dark:hover:to-jungle-700 h-12 px-6 text-lg"
              >
                {primaryAction.label}
              </button>
            </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8 lg:col-span-6 hidden md:block">
              {isMounted && (
                <ResponsiveImage 
                  src={imageSrc}
                  alt={imageAlt}
                  containerWidth={640}
                  containerHeight={466}
                  className="absolute right-0 top-60 -translate-y-1/2 w-[40rem] max-w-none"
                  priority={false}
                  objectFit="contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default CTA;
