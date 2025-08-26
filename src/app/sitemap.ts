import type { MetadataRoute } from 'next';
import { getAllPosts, getSiteSettings } from '@lib/cms/payload';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, settings] = await Promise.all([getAllPosts(), getSiteSettings()]);
  const base = settings?.domain?.replace(/\/$/, '') || process.env.NEXT_PUBLIC_SITE_URL || '';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/company`, lastModified: new Date() },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(p.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
