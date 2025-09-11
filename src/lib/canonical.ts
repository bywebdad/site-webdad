// Утилиты для работы с каноническими URL

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webdad.by';

/**
 * Генерирует канонический URL для страницы
 */
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Создает объект метаданных с каноническим URL
 */
export const createCanonicalMetadata = (
  path: string,
  title: string,
  description: string,
  additionalMeta: Record<string, any> = {}
) => {
  const canonicalUrl = getCanonicalUrl(path);
  
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      ...additionalMeta.openGraph,
    },
    robots: {
      index: true,
      follow: true,
      ...additionalMeta.robots,
    },
    ...additionalMeta,
  };
};

/**
 * Проверяет, является ли URL каноническим
 */
export const isCanonicalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    
    // Проверяем основные критерии канонического URL:
    // 1. Нет trailing slash (кроме корня)
    // 2. Нет параметров запроса (кроме разрешенных)
    // 3. Нет фрагментов
    // 4. Правильный домен
    
    const hasTrailingSlash = urlObj.pathname.length > 1 && urlObj.pathname.endsWith('/');
    const hasQuery = urlObj.search.length > 0;
    const hasFragment = urlObj.hash.length > 0;
    const isCorrectDomain = urlObj.origin === SITE_URL.replace(/\/$/, '');
    
    return !hasTrailingSlash && !hasQuery && !hasFragment && isCorrectDomain;
  } catch {
    return false;
  }
};

/**
 * Нормализует URL к каноническому виду
 */
export const normalizeToCanonical = (url: string): string => {
  try {
    const urlObj = new URL(url);
    
    // Убираем trailing slash (кроме корня)
    if (urlObj.pathname.length > 1 && urlObj.pathname.endsWith('/')) {
      urlObj.pathname = urlObj.pathname.slice(0, -1);
    }
    
    // Убираем параметры запроса и фрагменты
    urlObj.search = '';
    urlObj.hash = '';
    
    return urlObj.toString();
  } catch {
    return url;
  }
};

/**
 * Список всех канонических страниц сайта
 */
export const CANONICAL_PAGES = [
  '/',
  '/company',
  '/projects',
  '/blog',
  '/agile',
  '/services/development',
  '/services/outsourcing',
  '/services/consulting',
  '/services/ai-analytics',
  // Статические проекты
  '/projects/addseller',
  '/projects/addwine',
  '/projects/amatar',
  '/projects/geomarketing',
  '/projects/journal',
  '/projects/miniapp-coffee',
  '/projects/real-estate-analytics',
  '/projects/realt-estate-miniapp',
  '/projects/sophienwald',
  '/projects/upgrade',
  '/projects/warehouse',
] as const;

/**
 * Проверяет, существует ли страница в списке канонических
 */
export const isValidCanonicalPage = (path: string): boolean => {
  return CANONICAL_PAGES.includes(path as any) || 
         path.startsWith('/blog/') || 
         path.startsWith('/projects/');
};
