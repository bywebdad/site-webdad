import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://webdad.by').replace(/\/$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/preview',
        '/projects/[slug]',  // Исключаем динамический роут который всегда 404
        '/_next/',
        '/api/',
      ],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
