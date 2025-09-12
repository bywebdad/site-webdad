/**
 * Утилиты для оптимизации CSS загрузки
 */

// Критический CSS для above-the-fold контента
export const criticalCSS = `
/* Базовые стили для немедленной отрисовки */
html { 
  scroll-behavior: smooth; 
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #ffffff;
  color: #0f172a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #111827;
    color: #ffffff;
  }
}

.dark body {
  background-color: #111827;
  color: #ffffff;
}

/* Критические утилиты Tailwind */
.min-h-screen { min-height: 100vh; }
.bg-white { background-color: #ffffff; }
.text-slate-900 { color: #0f172a; }
.dark\\:bg-gray-900.dark { background-color: #111827; }
.dark\\:text-white.dark { color: #ffffff; }
.mx-auto { margin-left: auto; margin-right: auto; }
.max-w-7xl { max-width: 80rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.gap-8 { gap: 2rem; }
.gap-6 { gap: 1.5rem; }

/* Aspect ratio utilities */
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }

/* Position utilities */
.absolute { position: absolute; }
.relative { position: relative; }
.sticky { position: sticky; }
.fixed { position: fixed; }
.inset-x-0 { left: 0; right: 0; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.inset-y-0 { top: 0; bottom: 0; }
.top-0 { top: 0; }
.right-0 { right: 0; }
.z-10 { z-index: 10; }
.z-50 { z-index: 50; }
.overflow-hidden { overflow: hidden; }
.overflow-y-auto { overflow-y: auto; }

/* Border radius utilities */
.rounded-t-3xl { border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem; }
.rounded-2xl { border-radius: 1rem; }

/* Display utilities */
.flex { display: flex; }
.block { display: block; }
.hidden { display: none; }

/* Size utilities */
.h-full { height: 100%; }
.w-full { width: 100%; }
.max-w-7xl { max-width: 80rem; }
.max-w-md { max-width: 28rem; }
.max-w-sm { max-width: 24rem; }

/* Flexbox utilities */
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-end { justify-content: flex-end; }
.flex-1 { flex: 1 1 0%; }
.flex-none { flex: none; }

/* Spacing utilities */
.p-6 { padding: 1.5rem; }
.p-4 { padding: 1rem; }
.p-3 { padding: 0.75rem; }
.gap-x-12 { column-gap: 3rem; }
.gap-x-6 { column-gap: 1.5rem; }
.gap-x-4 { column-gap: 1rem; }
.gap-4 { gap: 1rem; }
.gap-2 { gap: 0.5rem; }

/* Background utilities */
.bg-white { background-color: #ffffff; }
.bg-transparent { background-color: transparent; }

/* Border utilities */
.border-b { border-bottom-width: 1px; }
.border-transparent { border-color: transparent; }
.rounded-3xl { border-radius: 1.5rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-md { border-radius: 0.375rem; }

/* Effects utilities */
.backdrop-blur { backdrop-filter: blur(8px); }
.backdrop-blur-0 { backdrop-filter: blur(0); }
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }

/* Transition utilities */
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.duration-300 { transition-duration: 300ms; }

/* Object utilities */
.object-cover { object-fit: cover; }

/* Responsive grid columns */
@media (min-width: 768px) {
  .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\\:gap-8 { gap: 2rem; }
  .md\\:gap-10 { gap: 2.5rem; }
}

.text-center { text-align: center; }
.font-bold { font-weight: 700; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-gray-600 { color: #4b5563; }
.dark\\:text-gray-300.dark { color: #d1d5db; }

/* Responsive utilities для критических брейкпоинтов */
@media (min-width: 640px) {
  .sm\\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
  .sm\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sm\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  .sm\\:gap-x-10 { column-gap: 2.5rem; }
  .sm\\:mt-16 { margin-top: 4rem; }
  .sm\\:mt-20 { margin-top: 5rem; }
}

@media (min-width: 1024px) {
  .lg\\:py-32 { padding-top: 8rem; padding-bottom: 8rem; }
  .lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
  .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .lg\\:col-span-6 { grid-column: span 6 / span 6; }
  .lg\\:col-span-2 { grid-column: span 2 / span 2; }
  .lg\\:gap-x-16 { column-gap: 4rem; }
  .lg\\:gap-x-8 { column-gap: 2rem; }
  .lg\\:gap-y-10 { row-gap: 2.5rem; }
  .lg\\:gap-y-16 { row-gap: 4rem; }
  .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
  .lg\\:items-center { align-items: center; }
  .lg\\:items-start { align-items: flex-start; }
  .lg\\:mx-0 { margin-left: 0; margin-right: 0; }
  .lg\\:max-w-none { max-width: none; }
  .lg\\:mt-0 { margin-top: 0; }
  .lg\\:mt-24 { margin-top: 6rem; }
  .lg\\:pt-0 { padding-top: 0; }
  .lg\\:flex { display: flex; }
  .lg\\:hidden { display: none; }
  .lg\\:flex-1 { flex: 1 1 0%; }
  .lg\\:justify-end { justify-content: flex-end; }
  .lg\\:gap-x-12 { column-gap: 3rem; }
}

/* Скрытие некритического контента до загрузки полного CSS */
.non-critical-hidden {
  visibility: hidden;
}

.css-loaded .non-critical-hidden {
  visibility: visible;
}
`;

/**
 * Загружает CSS асинхронно
 */
export function loadCSSAsync(href: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    
    link.onload = () => {
      link.media = 'all';
      resolve();
    };
    
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

/**
 * Предзагружает CSS файлы
 */
export function preloadCSS(href: string): void {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Инициализирует оптимизацию CSS
 */
export function initCSSOptimization(): void {
  // Отмечаем, что CSS загружен
  document.documentElement.classList.add('css-loaded');
  
  // Предзагружаем критические шрифты
  const fontPreloads = [
    '/fonts/inter-var.woff2',
  ];
  
  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });
}

/**
 * Получает критический CSS для конкретной страницы
 */
export function getPageCriticalCSS(page: string): string {
  const pageCriticalStyles: Record<string, string> = {
    home: `
      /* Дополнительные стили для главной страницы */
      .hero-section { display: block; }
      .cta-button { 
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.5rem;
        background-color: #059669;
        color: #ffffff;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 600;
        transition: background-color 0.2s;
      }
      .cta-button:hover {
        background-color: #047857;
      }
    `,
    blog: `
      /* Критические стили для блога */
      .prose { max-width: 65ch; }
      .prose h1 { font-size: 2.25rem; line-height: 2.5rem; margin-bottom: 2rem; }
      .prose p { margin-bottom: 1.25rem; line-height: 1.75; }
    `,
    projects: `
      /* Критические стили для проектов */
      .project-grid { display: grid; gap: 2rem; }
      .project-card { 
        background: #ffffff;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }
    `
  };
  
  return criticalCSS + (pageCriticalStyles[page] || '');
}
