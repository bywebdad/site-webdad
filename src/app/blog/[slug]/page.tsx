import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import Article from '@templates/Article';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const { getAllSlugs } = await import('@lib/cms/payload');
    const slugs = await getAllSlugs();
    return slugs.map((slug: string) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { getPostBySlug } = await import('@lib/cms/payload');
    const post = await getPostBySlug(slug);
    if (!post) return {};
    const seo = post.seo || {};
    const title = seo.metaTitle || `${post.title} — NewSite`;
    const description = seo.metaDescription || post.excerpt || undefined;
    const ogTitle = seo.ogTitle || title;
    const ogDescription = seo.ogDescription || description;
    const ogImageUrl = seo.ogImage?.url || post.coverSrc || undefined;
    const canonical = seo.canonicalUrl || undefined;
    const robots = (seo.noindex || seo.nofollow)
      ? {
          index: seo.noindex ? false : true,
          follow: seo.nofollow ? false : true,
        }
      : undefined;

    return {
      title,
      description,
      alternates: canonical ? { canonical } : undefined,
      robots,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
        type: 'article',
      },
      twitter: {
        card: ogImageUrl ? 'summary_large_image' : 'summary',
        title: ogTitle,
        description: ogDescription,
        images: ogImageUrl ? [ogImageUrl] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { getPostBySlug } = await import('@lib/cms/payload');
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
  } catch {
    return notFound();
  }
}
