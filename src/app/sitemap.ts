import type { MetadataRoute } from 'next';
import { getAllProjects, type Project } from '../lib/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = getAllProjects();
  
  // Получаем реальные статьи из CMS
  let posts: Array<{ slug: string; date?: string }> = [];
  try {
    const { getAllPosts } = await import('../lib/cms/payload');
    const cmsData = await getAllPosts({ limit: 500 });
    posts = cmsData.map(post => ({
      slug: post.slug,
      date: post.date || post.publishedAt
    }));
  } catch (error) {
    console.warn('Failed to fetch posts from CMS for sitemap:', error);
    // Не добавляем статические посты в sitemap, если CMS недоступна
    posts = [];
  }
  
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://webdad.by').replace(/\/$/, '');

  // Статические страницы
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/company`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/agile`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Услуги
    {
      url: `${siteUrl}/services/development`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/outsourcing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/consulting`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/ai-analytics`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Только статические проекты (исключаем дублирование)
  const staticProjects = [
    'addseller',
    'addwine', 
    'amatar',
    'geomarketing',
    'journal',
    'miniapp-coffee',
    'real-estate-analytics',
    'realt-estate-miniapp',
    'sophienwald',
    'upgrade',
    'warehouse'
  ];

  const projectRoutes: MetadataRoute.Sitemap = staticProjects.map(slug => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Посты блога из CMS
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...postRoutes,
  ];
}
