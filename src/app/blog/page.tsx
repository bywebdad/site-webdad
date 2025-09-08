import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import BlogHero from '@templates/BlogHero';
import Blog from '@templates/Blog';
import BlogFilters from '@molecules/BlogFilters';

export const metadata: Metadata = {
  title: 'Блог — WEBDAD',
  description: 'Статьи, практики и новости компании NewSite.',
};

export default async function BlogPage({ searchParams }: { searchParams?: Promise<{ tag?: string; author?: string }> }) {
  const sp = (await (searchParams || Promise.resolve({}))) as any;
  const { tag: selectedTagId, author: selectedAuthorId } = sp || ({} as any);

  let posts: Array<any> = [];
  let tags: Array<{ id: string; title: string }> = [];
  let authors: Array<{ id: string; name: string }> = [];
  try {
    const { getAllPosts, getAllTags, getAllAuthors } = await import('@lib/cms/payload');
    const [data, tagList, authorList] = await Promise.all([
      getAllPosts({ tagIds: selectedTagId ? [selectedTagId] : [], authorId: selectedAuthorId }),
      getAllTags(),
      getAllAuthors(),
    ]);
    posts = data.map((p: any) => ({
      title: p.title,
      href: `/blog/${p.slug}`,
      imageSrc: p.coverSrc ?? '/blog/01.png',
      imageAlt: p.coverAlt ?? p.title,
      date: p.date,
      author: p.author ? { name: p.author.name, avatarSrc: p.author.avatarSrc } : undefined,
    }));
    tags = tagList;
    authors = authorList;
  } catch {
    posts = [];
    tags = [];
    authors = [];
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <BlogHero />
        <BlogFilters tags={tags} authors={authors} selectedTagId={selectedTagId} selectedAuthorId={selectedAuthorId} />
        <Blog posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
