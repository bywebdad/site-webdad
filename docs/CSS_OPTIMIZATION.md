# CSS Оптимизация для устранения блокирующих запросов

## Проблема
Блокирующие CSS запросы замедляют отрисовку страницы на 150+ мс. CSS файл размером 14 КБ блокирует рендеринг на 180 мс.

## Решение

### 1. Критический CSS инлайнинг
- **Файл**: `src/lib/css-optimizer.ts`
- **Компонент**: `src/components/atoms/CriticalCSS.tsx`
- Критические стили встраиваются прямо в HTML для мгновенной отрисовки above-the-fold контента

### 2. Асинхронная загрузка некритического CSS
- **Компонент**: `src/components/atoms/AsyncCSS.tsx`
- **Молекула**: `src/components/molecules/CSSLoader.tsx`
- Некритический CSS загружается асинхронно через `media="print"` трюк

### 3. Next.js конфигурация
```javascript
// next.config.mjs
experimental: {
  optimizeCss: true,
  inlineCss: true,
}

// CSS bundle splitting
splitChunks: {
  cacheGroups: {
    styles: {
      name: 'styles',
      test: /\.(css|scss|sass)$/,
      chunks: 'all',
      enforce: true,
    },
  },
}
```

### 4. Layout оптимизация
```tsx
// src/app/layout.tsx
<head>
  {/* Критический CSS инлайн */}
  <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
  
  {/* Предзагрузка */}
  <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
  
  {/* Асинхронная загрузка */}
  <link 
    rel="stylesheet" 
    href="/_next/static/css/app/layout.css" 
    media="print" 
    onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }}
  />
</head>
```

## Критический CSS состав

### Базовые стили
- Шрифты и типографика
- Цвета и темы (light/dark mode)
- Базовая сетка и контейнеры
- Above-the-fold компоненты

### Утилиты Tailwind
- Layout: `min-h-screen`, `mx-auto`, `max-w-7xl`
- Spacing: `px-6`, `py-16`, `gap-8`
- Grid: `grid`, `grid-cols-1`, `lg:grid-cols-12`
- Typography: `text-3xl`, `font-bold`, `text-center`

## Ожидаемые улучшения

### Производительность
- **TTFB**: улучшение на 150+ мс
- **LCP**: значительное сокращение времени до отрисовки
- **FCP**: мгновенная отрисовка критического контента

### Размер бундла
- Критический CSS: ~2-3 КБ инлайн
- Некритический CSS: асинхронная загрузка 11-12 КБ
- Общее сокращение блокирующих ресурсов: 100%

## Использование компонентов

### CriticalCSS (атом)
```tsx
import CriticalCSS from '@atoms/CriticalCSS';

<CriticalCSS 
  criticalCSS={criticalStyles}
  nonCriticalCSS={['/styles/components.css']}
/>
```

### AsyncCSS (атом)
```tsx
import AsyncCSS from '@atoms/AsyncCSS';

<AsyncCSS 
  href="/styles/non-critical.css"
  media="all"
  onLoad={() => console.log('CSS loaded')}
/>
```

### CSSLoader (молекула)
```tsx
import CSSLoader from '@molecules/CSSLoader';

<CSSLoader
  criticalCSS={['/critical.css']}
  nonCriticalCSS={['/components.css', '/animations.css']}
  preloadCSS={['/fonts.css']}
/>
```

## Мониторинг

### Lighthouse метрики
- **LCP**: должен улучшиться на 150+ мс
- **FCP**: значительное сокращение
- **CLS**: стабильность благодаря критическому CSS

### Инструменты
- Chrome DevTools Performance
- Lighthouse CI
- WebPageTest
- Core Web Vitals

## Дальнейшие оптимизации

### 1. Автоматическое извлечение критического CSS
```bash
npm install critical --save-dev
```

### 2. CSS Tree Shaking
- Удаление неиспользуемых стилей
- PurgeCSS интеграция

### 3. CSS-in-JS оптимизация
- Styled-components с SSR
- Emotion критический CSS

### 4. HTTP/2 Push
- Предзагрузка критических ресурсов
- Service Worker кэширование

## Troubleshooting

### FOUC (Flash of Unstyled Content)
```css
.non-critical-hidden {
  visibility: hidden;
}

.css-loaded .non-critical-hidden {
  visibility: visible;
}
```

### Медленная загрузка CSS
```javascript
// Fallback для медленных соединений
setTimeout(() => {
  if (!document.querySelector('.css-loaded')) {
    document.documentElement.classList.add('css-loaded');
  }
}, 3000);
```

### Проблемы с темами
```javascript
// Синхронизация темы с критическим CSS
const theme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.toggle('dark', theme === 'dark');
```

## Результаты тестирования

После внедрения оптимизации ожидается:
- ✅ Устранение блокирующих CSS запросов
- ✅ Сокращение времени до первой отрисовки на 150+ мс
- ✅ Улучшение LCP и FCP метрик
- ✅ Лучший пользовательский опыт
- ✅ Сохранение всей функциональности
