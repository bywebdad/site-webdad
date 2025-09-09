import type { FC } from 'react';
import GradientBlob from '@atoms/GradientBlob';

export type CompanyIntroLink = {
  label: string;
  href: string;
};

export type CompanyIntroStat = {
  label: string;
  value: string;
};

export type CompanyIntroProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  links?: CompanyIntroLink[];
  stats?: CompanyIntroStat[];
  className?: string;
};

const defaultLinks: CompanyIntroLink[] = [
  { label: 'Open roles →', href: '#' },
  { label: 'Internship program →', href: '#' },
  { label: 'Our values →', href: '#' },
  { label: 'Meet our leadership →', href: '#' },
];

const defaultStats: CompanyIntroStat[] = [
  { label: 'Offices worldwide', value: '12' },
  { label: 'Full-time colleagues', value: '300+' },
  { label: 'Hours per week', value: '40' },
  { label: 'Paid time off', value: 'Unlimited' },
];

const CompanyIntro: FC<CompanyIntroProps> = ({
  title = 'Work with us',
  subtitle = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  imageSrc = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=screen',
  links = defaultLinks,
  stats = defaultStats,
  className = '',
}) => {
  return (
    <section
      className={[
        'relative isolate overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900',
        className,
      ].join(' ')}
      aria-label="Вступительный блок компании"
    >
      {/* Фоновое изображение */}
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-10 md:object-center"
      />

      {/* Декоративные градиенты */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-30 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          className="aspect-[1097/845] w-[68rem] bg-gradient-to-tr from-[#ff7317] to-[#f05306] opacity-[0.15]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-28 sm:ml-16 sm:translate-x-0"
      >
        <div
          className="aspect-[1097/845] w-[68rem] bg-gradient-to-tr from-[#ff7317] to-[#f05306] opacity-[0.15]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Нижний декоративный градиент (аналог верхнего) */}
      <GradientBlob
        wrapperClassName="hidden sm:absolute sm:-bottom-50 sm:left-1/2 sm:-z-10 sm:ml-10 sm:block sm:transform-gpu sm:blur-3xl"
      />

      {/* Верхний градиент-переход для плавного стыка с предыдущим блоком */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-900 -z-10"
      />

      {/* Нижний градиент-переход для плавного стыка со следующим блоком (направление вверх) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900 -z-10"
      />

      {/* Контент */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
            {title}
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 dark:text-gray-300 sm:text-xl/8">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <nav
            className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 dark:text-white sm:grid-cols-2 md:flex lg:gap-x-10"
            aria-label="Ссылки компании"
          >
            {links.map((l, idx) => (
              <a
                key={idx}
                href={l.href}
                className="hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                aria-label={l.label}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-700 dark:text-gray-300">{s.label}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
