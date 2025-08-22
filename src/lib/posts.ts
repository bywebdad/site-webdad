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
    coverSrc: '/blog/01.png',
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
