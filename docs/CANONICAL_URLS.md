# Исправление канонических URL

## Проблема
В карте сайта были обнаружены неканонические страницы, что могло приводить к проблемам с индексацией поисковыми системами.

## Выявленные проблемы:
1. **Дублирование в sitemap.xml** - проекты добавлялись дважды (статические + динамические)
2. **Отсутствие канонических URL** в метаданных страниц
3. **Динамический роут [slug]** всегда возвращал 404, но мог индексироваться
4. **Trailing slash** не обрабатывался в middleware
5. **Неправильный базовый URL** в robots.txt

## Выполненные исправления

### 1. Исправлен sitemap.ts
```typescript
// Убрано дублирование проектов
const projectRoutes: MetadataRoute.Sitemap = staticProjects.map(slug => ({
  url: `${siteUrl}/projects/${slug}`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
}));

// Удалены динамические проекты из sitemap
return [
  ...staticRoutes,
  ...projectRoutes,  // Только статические проекты
  ...postRoutes,
];
```

### 2. Обновлен robots.ts
```typescript
export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://webdad.by').replace(/\/$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/preview',
        '/projects/[slug]',  // Исключаем динамический роут
        '/_next/',
        '/api/',
      ],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
```

### 3. Добавлены канонические URL в метаданные
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webdad.by';

export const metadata: Metadata = {
  title: 'Заголовок страницы',
  description: 'Описание страницы',
  alternates: {
    canonical: `${siteUrl}/projects/addseller`,
  },
  openGraph: {
    url: `${siteUrl}/projects/addseller`,
    // ... другие свойства
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 4. Обновлен middleware
```typescript
// Редирект trailing slash к каноническому URL (кроме корня)
if (pathname.length > 1 && pathname.endsWith('/')) {
  const url = request.nextUrl.clone();
  url.pathname = pathname.slice(0, -1);
  return NextResponse.redirect(url, 301);
}
```

### 5. Создана утилита canonical.ts
Библиотека для работы с каноническими URL:
- `getCanonicalUrl(path)` - генерация канонического URL
- `createCanonicalMetadata()` - создание метаданных с каноническим URL
- `isCanonicalUrl()` - проверка канонического формата
- `normalizeToCanonical()` - нормализация URL
- `CANONICAL_PAGES` - список всех канонических страниц

## Результаты исправления

### ✅ Решенные проблемы:
1. **Устранено дублирование** страниц в sitemap.xml
2. **Добавлены канонические URL** во все метаданные страниц
3. **Исключен динамический роут** из индексации через robots.txt
4. **Автоматический редирект** trailing slash к каноническому виду
5. **Корректный базовый URL** в robots.txt

### 📊 Улучшения SEO:
- Все страницы в sitemap теперь канонические
- Поисковые системы получают четкие указания о предпочтительных URL
- Устранены проблемы с дублированным контентом
- Улучшена структура внутренних ссылок

## Использование утилиты canonical.ts

### Для новых страниц:
```typescript
import { createCanonicalMetadata } from '@lib/canonical';

export const metadata = createCanonicalMetadata(
  '/projects/new-project',
  'Заголовок проекта',
  'Описание проекта',
  {
    openGraph: {
      images: [{ url: '/projects/new-project/image.jpg' }],
      type: 'article',
    }
  }
);
```

### Проверка канонического URL:
```typescript
import { isCanonicalUrl, normalizeToCanonical } from '@lib/canonical';

const url = 'https://webdad.by/projects/test/';
console.log(isCanonicalUrl(url)); // false
console.log(normalizeToCanonical(url)); // 'https://webdad.by/projects/test'
```

## Мониторинг

### Проверка sitemap:
```bash
curl https://webdad.by/sitemap.xml
```

### Проверка robots.txt:
```bash
curl https://webdad.by/robots.txt
```

### Проверка канонических URL:
Используйте Google Search Console для мониторинга индексации канонических страниц.

## Рекомендации

1. **Всегда используйте** `createCanonicalMetadata()` для новых страниц
2. **Проверяйте sitemap** после добавления новых разделов
3. **Тестируйте редиректы** после изменений в middleware
4. **Мониторьте** Google Search Console на предмет проблем с каноническими URL
5. **Обновляйте** `CANONICAL_PAGES` при добавлении новых статических страниц
