export type PostAuthor = {
  name: string;
  avatarSrc?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  coverSrc?: string;
  coverAlt?: string;
  date: string;
  author?: PostAuthor;
  tags?: string[];
  // Простой контент в виде параграфов. Без внешних зависимостей для Markdown.
  content: string[];
};

const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello World: первая статья в блоге',
    excerpt:
      'Добро пожаловать в наш блог! Рассказываем о целях, планах и как мы будем делиться практикой и инсайтами.',
    coverSrc: '/blog/01.webp',
    coverAlt: 'Обложка статьи: ноутбук на столе',
    date: '2025-03-10',
    author: { name: 'Team NewSite' },
    tags: ['intro', 'product', 'culture'],
    content: [
      'Это демо-статья, которая показывает, как выглядит страница одного поста. Контент хранится как массив абзацев без Markdown, чтобы обойтись без дополнительных зависимостей.',
      'В реальном проекте вы можете заменить источник данных на CMS, MDX или файловую систему. Интерфейсы и компоненты останутся прежними — меняется только имплементация функций получения данных.',
      'Мы используем атомарный дизайн: мета-информация — это молекула, сам макет статьи — шаблон (template), страница — route уровня app.',
    ],
  },
  {
    slug: 'upgrade-crm-integration',
    title: 'Интеграция с CRM для агентства недвижимости Upgrade',
    excerpt:
      'Как мы автоматизировали процессы подбора объектов и синхронизации данных с внешними системами.',
    coverSrc: '/blog/02.webp',
    coverAlt: 'Скриншот интеграции CRM системы',
    date: '2025-02-15',
    author: { name: 'Team WEBDAD' },
    tags: ['upgrade', 'crm', 'integration', 'real-estate'],
    content: [
      'При разработке системы для агентства недвижимости Upgrade одной из ключевых задач была интеграция с существующей CRM системой.',
      'Мы реализовали двустороннюю синхронизацию данных, автоматический подбор объектов по критериям клиентов и уведомления о новых предложениях.',
      'Техническое решение включало REST API, веб-хуки для real-time обновлений и систему очередей для обработки больших объемов данных.',
    ],
  },
  {
    slug: 'upgrade-automation-workflow',
    title: 'Автоматизация рабочих процессов в Upgrade',
    excerpt:
      'Разработка системы автоматического подбора недвижимости и уведомлений для клиентов.',
    coverSrc: '/blog/03.webp',
    coverAlt: 'Диаграмма автоматизированного процесса',
    date: '2025-01-20',
    author: { name: 'Team WEBDAD' },
    tags: ['upgrade', 'automation', 'workflow', 'notifications'],
    content: [
      'Система автоматизации для Upgrade включает в себя умный подбор объектов недвижимости на основе предпочтений клиентов.',
      'Мы внедрили алгоритмы машинного обучения для анализа поведения пользователей и предсказания их интересов.',
      'Результат: сокращение времени подбора объектов на 70% и увеличение конверсии в сделки на 45%.',
    ],
  },
];

export const getAllSlugs = (): string[] => posts.map((p) => p.slug);

export const getPostBySlug = (slug: string): Post | null => {
  return posts.find((p) => p.slug === slug) ?? null;
};

export const getAllPosts = (): Post[] => {
  return [...posts].sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    if (Number.isNaN(da) || Number.isNaN(db)) return 0;
    return db - da;
  });
};
