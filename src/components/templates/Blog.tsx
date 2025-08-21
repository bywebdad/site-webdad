import type { FC } from 'react';
import BlogCard, { type BlogCardProps } from '../molecules/BlogCard';

export type BlogProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  posts?: BlogCardProps[];
};

const defaultPosts: BlogCardProps[] = [
  {
    title: 'Увеличьте конверсию: практические советы',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Рабочее место с ноутбуком и аксессуарами',
    date: 'Mar 16, 2020',
    author: { name: 'Michael Foster' },
  },
  {
    title: 'SEO в 2025: как поисковая оптимизация двигает продажи',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Стол, ноутбук и растения у окна',
    date: 'Mar 10, 2020',
    author: { name: 'Lindsay Walton' },
  },
  {
    title: 'Улучшите клиентский опыт с помощью аналитики',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Настольный монитор и рабочее место',
    date: 'Feb 12, 2020',
    author: { name: 'Tom Cook' },
  },
];

const Blog: FC<BlogProps> = ({
  eyebrow = 'Из нашего блога',
  title = 'Лучшие практики и экспертные советы',
  subtitle = 'Узнавайте, как развивать бизнес с помощью технологий.',
  posts = defaultPosts,
}) => {
  return (
    <section className="bg-white py-24 dark:bg-gray-950 sm:py-32" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          {posts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
