import BlogCard, { type BlogCardProps } from '../molecules/BlogCard';

export type BlogProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  posts?: BlogCardProps[];
  limit?: number;
  filterByTag?: string;
};

const Blog = async ({
  eyebrow = 'Из нашего блога',
  title = 'Лучшие практики и экспертные советы',
  subtitle = 'Узнавайте, как развивать бизнес с помощью технологий.',
  posts,
  limit = 6,
  filterByTag,
}: BlogProps) => {
  let items: BlogCardProps[] = posts ?? [];
  if (!items || items.length === 0) {
    try {
      // Пытаемся загрузить из CMS
      const { getAllPosts } = await import('@lib/cms/payload');
      const data = await getAllPosts({ page: 1, limit });
      items = data.map((p: any) => ({
        title: p.title,
        href: `/blog/${p.slug}`,
        imageSrc: p.coverSrc ?? '/blog/01.webp',
        imageAlt: p.coverAlt ?? p.title,
        date: p.date,
        author: p.author ? { name: p.author.name, avatarSrc: p.author.avatarSrc } : undefined,
      }));
    } catch {
      // Фолбэк на локальные посты
      try {
        const { getAllPosts } = await import('../../lib/posts');
        let allPosts = getAllPosts();
        
        // Фильтрация по тэгу если указан
        if (filterByTag) {
          allPosts = allPosts.filter((post: any) => 
            post.tags && post.tags.includes(filterByTag)
          );
        }
        
        items = allPosts.slice(0, limit).map((p: any) => ({
          title: p.title,
          href: `/blog/${p.slug}`,
          imageSrc: p.coverSrc ?? '/blog/01.webp',
          imageAlt: p.coverAlt ?? p.title,
          date: p.date,
          author: p.author ? { name: p.author.name, avatarSrc: p.author.avatarSrc } : undefined,
        }));
      } catch {
        items = [];
      }
    }
  }

  return (
    <section className="bg-white py-24 dark:bg-gray-900 sm:py-32" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h2 id="blog-heading" className="text-base font-semibold text-brand-500 dark:text-jungle-500">
            {eyebrow}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-balance">
            {title}
          </p>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {items.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
