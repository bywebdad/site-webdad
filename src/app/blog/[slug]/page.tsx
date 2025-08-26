import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import Article from '@templates/Article';
import { getAllSlugs, getPostBySlug } from '@lib/cms/payload';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — NewSite`,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverSrc ? [{ url: post.coverSrc }] : undefined,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Article
          title={post.title}
          excerpt={post.excerpt}
          coverSrc={post.coverSrc}
          coverAlt={post.coverAlt}
          date={post.date}
          authorName={post.author?.name}
          authorAvatarSrc={post.author?.avatarSrc}
          content={post.content}
        />
      </main>
      <Footer />
    </div>
  );
}
