'use client';

import { useEffect } from 'react';

interface CriticalCSSProps {
  criticalCSS?: string;
  nonCriticalCSS?: string[];
}

/**
 * Компонент для оптимизации загрузки CSS
 * Инлайнит критический CSS и асинхронно загружает некритический
 */
export default function CriticalCSS({ criticalCSS, nonCriticalCSS = [] }: CriticalCSSProps) {
  useEffect(() => {
    // Асинхронная загрузка некритического CSS
    nonCriticalCSS.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);

      // Fallback для старых браузеров
      const noscriptLink = document.createElement('noscript');
      noscriptLink.innerHTML = `<link rel="stylesheet" href="${href}">`;
      document.head.appendChild(noscriptLink);
    });
  }, [nonCriticalCSS]);

  return (
    <>
      {criticalCSS && (
        <style
          dangerouslySetInnerHTML={{ __html: criticalCSS }}
          data-critical-css="true"
        />
      )}
    </>
  );
}
