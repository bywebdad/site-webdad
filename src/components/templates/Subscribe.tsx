import type { FC, ReactNode } from 'react';
import Button from '@atoms/Button';

type Feature = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type SubscribeProps = {
  id?: string;
  title?: string;
  description?: string;
  features?: Feature[];
  className?: string;
};

const DefaultIconCalendar = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-brand-600 dark:text-jungle-500">
    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DefaultIconNoSpam = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-brand-600 dark:text-jungle-500">
    <path d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const defaultFeatures: Feature[] = [
  { title: 'Еженедельные статьи', description: 'Короткие и полезные письма без воды.', icon: DefaultIconCalendar },
  { title: 'Без спама', description: 'Только ценный контент и отписка в один клик.', icon: DefaultIconNoSpam },
];

const Subscribe: FC<SubscribeProps> = ({
  id = 'subscribe',
  title = 'Подпишитесь на нашу рассылку',
  description = 'Рассказываем о трендах, делимся кейсами и лучшими практиками раз в неделю.',
  features = defaultFeatures,
  className = '',
}) => {
  return (
    <section id={id} className={`relative overflow-hidden bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32 ${className}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{description}</p>

            <form className="mt-6 flex max-w-md gap-x-4" action="#" method="post">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Введите ваш email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-brand sm:text-sm dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:focus:ring-2 dark:focus:ring-jungle-500"
              />
              <Button type="submit" variant="gradient" size="lg" aria-label="Подписаться">
                Подписаться
              </Button>
            </form>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            {features.map((f, idx) => (
              <div className="flex flex-col items-start" key={idx}>
                <div className="rounded-md bg-brand-50 p-2 ring-1 ring-brand-100 text-brand-600 dark:bg-jungle-500/10 dark:ring-jungle-500/20 dark:text-jungle-500">
                  {f.icon ?? DefaultIconCalendar}
                </div>
                <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">{f.title}</dt>
                <dd className="mt-2 text-base text-gray-600 dark:text-gray-400">{f.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Декоративный градиент ниже контента */}
      <div aria-hidden="true" className="absolute left-1/2 top-[55%] z-0 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none">
        <div
          className="h-64 w-[36rem] sm:w-[48rem] lg:w-[56rem] bg-gradient-to-tr from-brand-200 to-brand-700 opacity-50 dark:from-jungle-200 dark:to-jungle-700 dark:opacity-40 "
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
    </section>
  );
};

export default Subscribe;
