import type { FC, ReactNode } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

type Benefit = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

type WhyChooseUsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: Benefit[];
};

const defaultItems: Benefit[] = [
  { title: 'Опыт более 10 лет', description: 'Тысячи успешных проектов' },
  { title: 'Команда экспертов', description: 'Сертифицированные инженеры и архитекторы' },
  { title: 'Гибкий подход', description: 'Адаптируемся под любые задачи' },
  { title: 'Прозрачность', description: 'Чёткие сроки, отчёты и коммуникация' },
  { title: 'Поддержка 24/7', description: 'Надёжность и стабильность системы' },
  { title: 'Фокус на результат', description: 'Ваш успех — наш приоритет' },
];

const WhyChooseUs: FC<WhyChooseUsProps> = ({
  eyebrow = 'Почему клиенты выбирают нас',
  title = 'Мы делаем сложное простым и надёжным',
  description = 'От первой консультации до долгосрочной поддержки — обеспечиваем качество, прозрачность и результат.',
  items = defaultItems,
}) => {
  return (
    <section className="bg-white py-24 dark:bg-gray-950 sm:py-32" aria-labelledby="why-choose-us-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h2 id="why-choose-us-heading" className="text-base font-semibold text-indigo-600">
            {eyebrow}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            {title}
          </p>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {items.map((item, idx) => (
              <div key={idx} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    {item.icon ?? <CheckCircleIcon aria-hidden className="size-6 text-white" />}
                  </div>
                  {item.title}
                </dt>
                {item.description && (
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{item.description}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
