import type { FC } from 'react';

type ServiceHeroProps = {
  eyebrow?: string;
  title: string; // поддерживает переносы строк через \n
  subtitle?: string;
};

const ServiceHero: FC<ServiceHeroProps> = ({
  eyebrow = 'Услуги',
  title,
  subtitle,
}) => {
  return (
    <section className="relative isolate px-6 pt-1 lg:px-8">
      {/* top gradient blob */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr bg-[length:200%_200%] animate-gradient motion-reduce:animate-none opacity-40 dark:opacity-90 from-brand-200 to-brand-700 dark:from-brand-500 dark:to-jungle-700 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl py-28 sm:py-40 lg:py-44">
        <h2 className="text-center text-base font-semibold text-brand-500 dark:text-jungle-500">{eyebrow}</h2>
        <h1 className="mt-3 text-center text-5xl font-semibold tracking-tight text-balance whitespace-pre-line text-gray-900 dark:text-white sm:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 text-center text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* bottom gradient blob */}
      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr bg-[length:200%_200%] animate-gradient motion-reduce:animate-none from-jungle-200 to-jungle-800 dark:from-brand-400 dark:to-jungle-600 opacity-50 dark:opacity-100 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
};

export default ServiceHero;
