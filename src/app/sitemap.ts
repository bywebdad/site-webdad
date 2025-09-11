import type { MetadataRoute } from 'next';
import { getAllProjects, type Project } from '../lib/projects';
import { getAllPosts, type Post } from '../lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = getAllProjects();
  const posts = getAllPosts();
  
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://dev.webdad.by').replace(/\/$/, '');

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

  // Статические проекты
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

  const staticProjectRoutes: MetadataRoute.Sitemap = staticProjects.map(slug => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Динамические проекты из projects.ts
  const dynamicProjectRoutes: MetadataRoute.Sitemap = projects.map((project: Project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Посты блога
  const postRoutes: MetadataRoute.Sitemap = posts.map((post: Post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...staticProjectRoutes,
    ...dynamicProjectRoutes,
    ...postRoutes,
  ];
}
