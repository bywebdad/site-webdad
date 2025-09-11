 'use client';
import type { FC } from 'react';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import ProjectCard, { type ProjectCardProps } from '@molecules/ProjectCard';

type TocItem = { label: string; href?: string };

type CaseItem = ProjectCardProps & { category: string };

type CasesProps = {
  id?: string;
  title?: string;
  toc?: TocItem[];
  items?: CaseItem[];
  className?: string;
  showAllButton?: boolean;
  allHref?: string;
  allLabel?: string;
};

const defaultToc: TocItem[] = [
  { label: 'Все' },
  { label: 'E‑commerce' },
  { label: 'Геоаналитика' },
  { label: 'Недвижимость' },
];

const defaultItems: CaseItem[] = [
  {
    category: 'E‑commerce',
    title: 'Интернет-магазин эксклюзивных аксессуаров',
    description:
      'Мульти‑витрина, интеграции с МойСклад и AmoCRM, маркетплейсы, бонусная программа и личный кабинет.',
    imageUrl: '/projects/addwine/01.png',
    href: '/projects/addwine',
    ctaVariant: 'arrow',
  },
  {
    category: 'Геоаналитика',
    title: 'Система геовизуализации',
    description:
      'Единая карта домохозяйств и конкурентов, слои, зоны охвата, прогноз товарооборота и аналитика.',
    imageUrl: '/projects/geomarketing/09.webp',
    href: '/projects/geomarketing',
    ctaVariant: 'arrow',
  },
  {
    category: 'Недвижимость',
    title: 'Telegram‑миниапп для агентства недвижимости',
    description:
      'Подбор объектов, уведомления, интеграция с CRM, мобильный UX и быстрая фильтрация.',
    imageUrl: '/projects/GRE/01.webp',
    href: '/projects/realt-estate-miniapp',
    ctaVariant: 'arrow',
  },
];

const Cases: FC<CasesProps> = ({
  id = 'cases',
  title = 'Портфолио',
  toc = defaultToc,
  items = defaultItems,
  className = '',
  showAllButton = false,
  allHref = '/projects',
  allLabel = 'Смотреть все кейсы',
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
          <nav className="lg:mx-12">
            {/* toc title removed */}

            <ul className="mt-4 lg:mt-8 flex gap-3 overflow-x-auto pr-1 lg:flex-col lg:gap-3">
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
                          ? 'inline-block whitespace-nowrap text-left font-medium text-brand-600 dark:text-jungle-500 underline decoration-brand-400 dark:decoration-jungle-400 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:focus-visible:ring-jungle-500 focus-visible:ring-offset-2'
                          : 'inline-block whitespace-nowrap text-left text-gray-500 hover:text-brand-600 dark:hover:text-jungle-500 hover:underline decoration-brand-300 dark:decoration-jungle-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:focus-visible:ring-jungle-500 focus-visible:ring-offset-2'
                      }
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Сетка кейсов (в стиле ProjectsCards с использованием ProjectCard) */}
          <div className="flex-1 lg:mx-12 lg:mt-0 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleItems.map((card) => (
                <ProjectCard
                  key={`${card.title}-${card.category}`}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  href={card.href}
                  ctaVariant={card.ctaVariant}
                />
              ))}
            </div>
            {showAllButton ? (
              <div className="mt-6 md:mt-8 flex justify-center">
                <Link
                  href={allHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 dark:bg-jungle-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 dark:hover:bg-jungle-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:focus-visible:ring-jungle-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900 transition-colors duration-200"
                  aria-label={allLabel}
                >
                  {allLabel}
                  <span aria-hidden className="-mr-1">→</span>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
