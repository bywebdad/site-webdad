import type { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
  let base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';
  try {
    const { getSiteSettings } = await import('@lib/cms/payload');
    const settings = await getSiteSettings();
    base = settings?.domain?.replace(/\/$/, '') || base;
  } catch {
    // keep fallback base
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/preview'],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
