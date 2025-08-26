import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Динамический импорт и устойчивость к ошибкам CMS на этапе билда
  let posts: Array<any> = [];
  let settings: any = null;
  try {
    const cms = await import('@lib/cms/payload');
    const [p, s] = await Promise.all([cms.getAllPosts(), cms.getSiteSettings()]);
    posts = Array.isArray(p) ? p : [];
    settings = s ?? null;
  } catch (err) {
    // Фолбэк: без падения сборки возвращаем только статические маршруты
    posts = [];
    settings = null;
  }

  const base = (settings?.domain?.replace(/\/$/, '') || process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/company`, lastModified: new Date() },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts
    .filter((p) => Boolean(p?.slug))
    .map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p?.publishedAt ? new Date(p.publishedAt) : (p?.date ? new Date(p.date) : new Date()),
    }));

  return [...staticRoutes, ...postRoutes];
}
