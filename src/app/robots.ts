import type { MetadataRoute } from 'next';
import { getSiteSettings } from '@lib/cms/payload';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getSiteSettings();
  const base = settings?.domain?.replace(/\/$/, '') || process.env.NEXT_PUBLIC_SITE_URL || '';
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
