import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import BlogHero from '@templates/BlogHero';
import Blog from '@templates/Blog';
import { getAllPosts } from '@lib/cms/payload';

export const metadata: Metadata = {
  title: 'Блог — NewSite',
  description: 'Статьи, практики и новости компании NewSite.',
};

export default async function BlogPage() {
  const data = await getAllPosts();
  const posts = data.map((p) => ({
    title: p.title,
    href: `/blog/${p.slug}`,
    imageSrc: p.coverSrc ?? '/blog/01.png',
    imageAlt: p.coverAlt ?? p.title,
    date: p.date,
    author: p.author ? { name: p.author.name, avatarSrc: p.author.avatarSrc } : undefined,
  }));

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <BlogHero />
        <Blog posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
