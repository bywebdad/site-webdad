 'use client';
 import type { FC } from 'react';
 import { useMemo, useState } from 'react';
 import CaseCard, { type CaseCardProps } from '@molecules/CaseCard';

type TocItem = { label: string; href?: string };

type CasesProps = {
  id?: string;
  title?: string;
  tocTitle?: string;
  toc?: TocItem[];
  items?: CaseCardProps[];
  className?: string;
};

const defaultToc: TocItem[] = [
  { label: 'Все' },
  { label: 'Веб-дизайн' },
  { label: 'Приложения' },
  { label: 'Брендинг' },
  { label: 'Анимация' },
];

const defaultItems: CaseCardProps[] = [
  {
    title: 'Подборка лучших веб‑сайтов',
    category: 'Веб-дизайн',
    imageSrc:
      'https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80',
    imageAlt: 'Веб-сайт на экране',
  },
  {
    title: 'Набор UI‑китов и компонентов',
    category: 'Приложения',
    imageSrc:
      'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'UI компоненты',
  },
  {
    title: 'Айдентика: фирменные мокапы',
    category: 'Брендинг',
    imageSrc:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Мобильные мокапы',
  },
];

const Cases: FC<CasesProps> = ({
  id = 'cases',
  title = 'Портфолио',
  tocTitle = 'Содержание',
  toc = defaultToc,
  items = defaultItems,
  className = '',
}) => {
  const [active, setActive] = useState<string>(toc[0]?.label ?? '');

  const visibleItems = useMemo(() => {
    if (!active || active.toLowerCase() === 'все') return items;
    return items.filter((it) => it.category.toLowerCase() === active.toLowerCase());
  }, [items, active]);

  return (
    <section id={id} className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white lg:text-3xl">{title}</h2>

        <div className="mt-8 lg:mt-16 lg:flex lg:-mx-12">
          {/* Левая колонка (TOC) */}
          <nav className="lg:mx-12" aria-label="Содержание">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tocTitle}</h3>

            <ul className="mt-4 space-y-3 lg:mt-8">
              {toc.map((item) => {
                const isActive = active === item.label;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActive(item.label)}
                      className={
                        isActive
                          ? 'block text-left font-medium text-indigo-600 underline decoration-indigo-400 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-indigo-400 dark:focus-visible:ring-indigo-400'
                          : 'block text-left text-gray-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-gray-300 dark:focus-visible:ring-indigo-400'
                      }
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Сетка кейсов */}
          <div className="flex-1 lg:mx-12 lg:mt-0 mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {visibleItems.map((card, i) => (
                <CaseCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
