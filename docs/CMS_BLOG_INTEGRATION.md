# Исправление проблемы с несуществующими статьями в sitemap

## Проблема
В карте сайта попадали несуществующие статьи из статического файла `posts.ts`, которые возвращали 404:
- `https://webdad.by/blog/hello-world` - 404
- `https://webdad.by/blog/upgrade-crm-integration` - 404  
- `https://webdad.by/blog/upgrade-automation-workflow` - 404

## Причина
Sitemap использовал локальную функцию `getAllPosts()` из `posts.ts` вместо реальных статей из CMS.

## Выполненные исправления

### 1. Обновлен sitemap.ts
```typescript
// ДО: Использовались статические посты
import { getAllPosts, type Post } from '../lib/posts';
const posts = getAllPosts();

// ПОСЛЕ: Используются реальные посты из CMS
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
  posts = []; // Пустой массив если CMS недоступна
}
```

### 2. Обработка ошибок CMS
- Если CMS недоступна, sitemap не будет содержать несуществующие статьи
- Добавлено логирование ошибок для отладки
- Graceful fallback к пустому списку статей

### 3. Правильная типизация
```typescript
// Убрана зависимость от типа Post из posts.ts
const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  url: `${siteUrl}/blog/${post.slug}`,
  lastModified: post.date ? new Date(post.date) : new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.6,
}));
```

## Архитектура системы блога

### Источники статей:
1. **CMS (основной)** - `src/lib/cms/payload.ts`
   - Реальные опубликованные статьи
   - Динамическое содержимое
   - Используется в production

2. **Статические посты** - `src/lib/posts.ts`
   - Демо-контент для разработки
   - Fallback для компонентов
   - НЕ используется в sitemap

### Компоненты блога:
- `/blog/page.tsx` - Список статей (приоритет CMS → fallback статические)
- `/blog/[slug]/page.tsx` - Страница статьи (только CMS)
- `sitemap.ts` - Карта сайта (только CMS)

## Результаты исправления

### ✅ Решенные проблемы:
1. **Убраны 404 статьи** из sitemap
2. **Только реальные статьи** из CMS попадают в карту сайта
3. **Graceful fallback** при недоступности CMS
4. **Правильная типизация** без зависимости от статических типов

### 📊 Улучшения SEO:
- Поисковые системы не индексируют несуществующие страницы
- Sitemap содержит только валидные URL
- Улучшена надежность генерации sitemap

## Мониторинг

### Проверка sitemap:
```bash
curl https://webdad.by/sitemap.xml | grep "/blog/"
```

### Проверка статей в CMS:
```bash
curl "https://your-cms.com/api/posts?limit=500&where[status][equals]=published"
```

### Логи ошибок:
Проверяйте логи сборки на предмет предупреждений:
```
Failed to fetch posts from CMS for sitemap: [error details]
```

## Рекомендации

1. **Мониторьте доступность CMS** во время сборки
2. **Проверяйте sitemap** после каждого деплоя
3. **Используйте revalidation** для обновления статей
4. **Настройте алерты** на ошибки получения данных из CMS
5. **Регулярно проверяйте** Google Search Console на 404 ошибки

## Структура файлов

```
src/
├── lib/
│   ├── posts.ts          # Статические посты (только для fallback)
│   └── cms/
│       └── payload.ts    # CMS интеграция (основной источник)
├── app/
│   ├── sitemap.ts        # Использует CMS
│   └── blog/
│       ├── page.tsx      # CMS + fallback
│       └── [slug]/
│           └── page.tsx  # Только CMS
```

Теперь sitemap содержит только реальные статьи из CMS, что устраняет проблемы с 404 ошибками.
