import { headers } from 'next/headers';

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

export type CMSTag = { id: string; title: string; slug?: string };

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
const altLocale = (site: 'by' | 'pro') => (site === 'pro' ? 'ru' : 'en');

export const getAllPosts = async ({ page = 1, limit = 12, tagIds = [], authorId }: { page?: number; limit?: number; tagIds?: string[]; authorId?: string } = {}) => {
  const site = await resolveSite();
  const collection = siteToCollection(site);
  const locale = siteToDefaultLocale(site);
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    sort: '-date',
    depth: '1',
  });
  params.set('where[status][equals]', 'published');
  params.set('locale', locale);
  params.set('fallback-locale', altLocale(site));
  params.set('draft', 'false');
  if (Array.isArray(tagIds) && tagIds.length > 0) {
    params.set('where[tags][in]', tagIds.join(','));
  }
  if (authorId) {
    params.set('where[author][equals]', authorId);
  }
  const init: RequestInit & { next?: { tags?: string[]; revalidate?: number } } = {
    next: { tags: [`posts:${site}`], revalidate: 60 },
    headers: authHeaders(),
  };
  let res = await fetch(`${CMS_URL}/api/${collection}?${params}`, init);
  if (!res.ok && res.status === 404) {
    // Фолбэк на единую коллекцию `posts`
    res = await fetch(`${CMS_URL}/api/posts?${params}`, init);
  }
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return (data.docs as CMSPost[]).map(mapPost);
};

export const getPostBySlug = async (slug: string) => {
  const site = await resolveSite();
  const collection = siteToCollection(site);
  const params = new URLSearchParams({ depth: '1', limit: '1' });
  params.set('locale', siteToDefaultLocale(site));
  params.set('fallback-locale', altLocale(site));
  params.set('draft', 'false');
  params.set('where[slug][equals]', slug);
  const init: RequestInit & { next?: { tags?: string[] } } = {
    next: { tags: [`post:${site}:${slug}`] },
    headers: authHeaders(),
  };
  let res = await fetch(`${CMS_URL}/api/${collection}?${params}`, init);
  if (!res.ok && res.status === 404) {
    res = await fetch(`${CMS_URL}/api/posts?${params}`, init);
  }
  if (!res.ok) return null;
  const data = await res.json();
  const doc = (data.docs as CMSPost[])[0];
  return doc ? mapPost(doc) : null;
};

export const getAllSlugs = async () => {
  const site = await resolveSite();
  const collection = siteToCollection(site);
  const params = new URLSearchParams({ limit: '500', fields: 'slug' });
  params.set('locale', siteToDefaultLocale(site));
  params.set('fallback-locale', altLocale(site));
  params.set('draft', 'false');
  params.set('where[status][equals]', 'published');
  const init: RequestInit & { next?: { tags?: string[] } } = { next: { tags: [`posts:${site}`] } };
  let res = await fetch(`${CMS_URL}/api/${collection}?${params}`, init);
  if (!res.ok && res.status === 404) {
    res = await fetch(`${CMS_URL}/api/posts?${params}`, init);
  }
  if (!res.ok) return [] as string[];
  const data = await res.json();
  return (data.docs as { slug: string }[]).map((d) => d.slug);
};

export const getAllTags = async (): Promise<CMSTag[]> => {
  const params = new URLSearchParams({ limit: '200', depth: '0', sort: 'title' });
  const res = await fetch(`${CMS_URL}/api/tags?${params}`, { next: { tags: ['tags'], revalidate: 300 } });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.docs as any[]).map((t) => ({ id: t.id, title: t.title, slug: t.slug }));
};

export const getAllAuthors = async (): Promise<Array<{ id: string; name: string; avatarSrc?: string }>> => {
  const params = new URLSearchParams({ limit: '200', depth: '0', sort: 'name' });
  const res = await fetch(`${CMS_URL}/api/authors?${params}`, { next: { tags: ['authors'], revalidate: 300 } });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.docs as any[]).map((a) => ({ id: a.id, name: a.name, avatarSrc: a?.avatar?.url }));
};

export const getSiteSettings = async () => {
  const res = await fetch(`${CMS_URL}/api/globals/siteSettings`, { next: { tags: ['siteSettings'] } });
  if (!res.ok) return null as SiteSettings | null;
  const data = (await res.json()) as SiteSettings;
  return data;
};
