import type { FC, ReactNode } from 'react';
import ButtonLink from '@atoms/ButtonLink';

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
  imageSrc = 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  imageAlt = 'App screenshot',
  className = '',
}) => {
  return (
    <section id={id} className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="w-full py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gray-900 shadow-2xl">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#radial-cta)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="radial-cta">
                <stop stopColor="#FF7317" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 md:pt-24 lg:pt-0 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-20">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:py-32 lg:text-left lg:col-span-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">{description}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <ButtonLink
                href={primaryAction.href}
                aria-label={primaryAction.ariaLabel ?? primaryAction.label}
                variant="primary"
                size="md"
                className="shadow-sm"
              >
                {primaryAction.label}
              </ButtonLink>
              <a
                href={secondaryAction.href}
                aria-label={secondaryAction.ariaLabel ?? secondaryAction.label}
                className="text-sm/6 font-semibold text-white hover:text-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
              >
                {secondaryAction.label}
                <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8 lg:col-span-6">
            <img
              alt={imageAlt}
              src={imageSrc}
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
