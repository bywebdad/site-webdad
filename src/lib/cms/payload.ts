export type CMSAuthor = {
  name: string;
  avatar?: { url: string } | null;
};

export type CMSMedia = { url: string; alt?: string };

export type CMSPost = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: CMSMedia | null;
  coverAlt?: string;
  date: string;
  author?: CMSAuthor | null;
  tags?: { title: string }[];
  content?: { paragraph: string }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: CMSMedia | null;
    noindex?: boolean;
    nofollow?: boolean;
    structuredData?: unknown;
  };
  publishedAt?: string;
  updatedAt?: string;
};

export type SiteSettings = {
  siteName: string;
  domain: string;
  defaultMetaTitle?: string;
  defaultMetaDescription?: string;
  defaultOgImage?: CMSMedia | null;
  twitterHandle?: string;
  organizationName?: string;
  logo?: CMSMedia | null;
  brandColor?: string;
};

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL as string;
import { headers } from 'next/headers';

const authHeaders = () => ({}); // публичное чтение published постов; добавьте Bearer при необходимости

const mapPost = (p: CMSPost) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  coverSrc: p.cover?.url,
  coverAlt: p.coverAlt ?? p.title,
  date: p.date,
  author: p.author ? { name: p.author.name, avatarSrc: p.author.avatar?.url } : undefined,
  tags: p.tags?.map((t) => t.title) ?? [],
  content: p.content?.map((b) => b.paragraph) ?? [],
  seo: p.seo,
  publishedAt: p.publishedAt,
  updatedAt: p.updatedAt,
});

const resolveSite = async (): Promise<'by' | 'pro'> => {
  const mode = (process.env.NEXT_PUBLIC_SITE_MODE || '').toLowerCase();
  if (mode === 'by' || mode === 'pro') return mode as 'by' | 'pro';
  try {
    const h = await headers();
    const host = (h.get('host') || '').toLowerCase();
    if (host.includes('pro')) return 'pro';
  } catch {}
  return 'by';
};

const siteToCollection = (site: 'by' | 'pro') => (site === 'pro' ? 'posts-pro' : 'posts-by');
const siteToDefaultLocale = (site: 'by' | 'pro') => (site === 'pro' ? 'en' : 'ru');

export const getAllPosts = async () => {
  const site = await resolveSite();
  const collection = siteToCollection(site);
  const locale = siteToDefaultLocale(site);
  const res = await fetch(
    `${CMS_URL}/api/${collection}?where[status][equals]=published&sort=-date&depth=1&locale=${locale}&fallback-locale=ru`,
    { next: { tags: [`posts:${site}`] }, headers: authHeaders() },
  );
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return (data.docs as CMSPost[]).map(mapPost);
};

export const getPostBySlug = async (slug: string) => {
  const site = await resolveSite();
  const collection = siteToCollection(site);
  const locale = siteToDefaultLocale(site);
  const res = await fetch(
    `${CMS_URL}/api/${collection}?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=1&locale=${locale}&fallback-locale=ru`,
    { next: { tags: [`post:${site}:${slug}`] }, headers: authHeaders() },
  );
  if (!res.ok) return null;
  const data = await res.json();
  const doc = (data.docs as CMSPost[])[0];
  return doc ? mapPost(doc) : null;
};

export const getAllSlugs = async () => {
  const site = await resolveSite();
  const collection = siteToCollection(site);
  const locale = siteToDefaultLocale(site);
  const res = await fetch(
    `${CMS_URL}/api/${collection}?limit=500&where[status][equals]=published&fields=slug&locale=${locale}&fallback-locale=ru`,
    { next: { tags: [`posts:${site}`] } },
  );
  if (!res.ok) return [] as string[];
  const data = await res.json();
  return (data.docs as { slug: string }[]).map((d) => d.slug);
};

export const getSiteSettings = async () => {
  const res = await fetch(`${CMS_URL}/api/globals/siteSettings`, { next: { tags: ['siteSettings'] } });
  if (!res.ok) return null as SiteSettings | null;
  const data = (await res.json()) as SiteSettings;
  return data;
};
