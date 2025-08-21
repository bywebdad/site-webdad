"use client";

import type { FC } from 'react';
import Button from '@atoms/Button';

interface HeroProps {
  title?: string;
  subtitle?: string;
  onPrimaryClick?: () => void;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

const Hero: FC<HeroProps> = ({
  title = 'Инновационные IT-решения для ускорения вашего бизнеса',
  subtitle = 'Мы разрабатываем, внедряем и поддерживаем передовые технологии, которые помогают компаниям расти, масштабироваться и побеждать в цифровую эпоху. ',
  onPrimaryClick,
  primaryLabel = 'Get started',
  secondaryHref = '#',
  secondaryLabel = 'Learn more',
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) onPrimaryClick();
  };

  return (
    <section className="relative isolate px-6 pt-1 lg:px-8">
      {/* top gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr bg-[length:200%_200%] animate-gradient motion-reduce:animate-none opacity-40 dark:opacity-90 from-brand-200 to-brand-700 dark:from-brand-500 dark:to-jungle-700 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-white/10 dark:hover:ring-white/20">
            Announcing our next round of funding.
            <a
              href="#"
              className="font-semibold text-indigo-600 dark:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button onClick={handlePrimaryClick} aria-label={primaryLabel}>
              {primaryLabel}
            </Button>
            <a
              href={secondaryHref}
              className="text-sm/6 font-semibold text-gray-900 dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {secondaryLabel} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* bottom gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr bg-[length:200%_200%] animate-gradient motion-reduce:animate-none from-jungle-200 to-jungle-800 dark:from-brand-400 dark:to-jungle-600 opacity-50 dark:opacity-100 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{ clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
    </section>
  );
};

export default Hero;
