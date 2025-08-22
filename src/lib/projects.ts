export type Project = {
  slug: string;
  title: string;
  description: string; // краткое для карточки
  summary?: string; // расширенное описание вверху страницы
  coverSrc?: string;
  coverAlt?: string;
  year?: number;
  client?: string;
  stack?: string[];
  tags?: string[];
  content: string[]; // абзацы
  gallery?: Array<{ src: string; alt?: string }>;
};

const projects: Project[] = [
  {
    slug: 'miniapp-coffee',
    title: 'Miniapp Coffee — мини‑приложение для кофейни',
    description:
      'Мини‑приложение для оформления заказов, оплаты и программ лояльности прямо в мобильном вебе.',
    summary:
      'Мы спроектировали и разработали мини‑приложение для сети кофеен. Оно позволяет оформлять заказы, оплачивать и копить бонусы. Интерфейс лёгкий, быстрый и отзывчивый.',
    coverSrc: '/blog/01.png',
    coverAlt: 'Скриншот интерфейса Miniapp Coffee',
    year: 2025,
    client: 'CoffeePoint',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    tags: ['Miniapp', 'E‑commerce', 'Loyalty'],
    content: [
      'Цель — сократить время ожидания и увеличить конверсии повторных покупок. Пользователи могут предварительно заказать напитки и забрать без очереди.',
      'Мы реализовали удобный каталог, апселлы, сохранённые заказы и Apple/Google Pay. Менеджеры видят статистику и промо‑кампании.',
      'Технически проект выполнен на Next.js с использованием App Router, серверный рендеринг для SEO, и адаптивная верстка на TailwindCSS.',
    ],
    gallery: [
      { src: '/blog/01.png', alt: 'Экран каталога' },
    ],
  },
];

export const getAllProjectSlugs = (): string[] => projects.map((p) => p.slug);

export const getProjectBySlug = (slug: string): Project | null => {
  return projects.find((p) => p.slug === slug) ?? null;
};

export const getAllProjects = (): Project[] => {
  return [...projects].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
};
