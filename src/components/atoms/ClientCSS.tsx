'use client';

import { useEffect } from 'react';

interface ClientCSSProps {
  href: string;
  preload?: boolean;
}

/**
 * Клиентский компонент для асинхронной загрузки CSS
 * Устраняет проблемы с гидратацией SSR
 */
export default function ClientCSS({ href, preload = true }: ClientCSSProps) {
  useEffect(() => {
    // Проверяем, не загружен ли уже этот CSS
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) return;

    // Предзагрузка CSS файла
    if (preload) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'style';
      preloadLink.href = href;
      document.head.appendChild(preloadLink);
    }

    // Асинхронная загрузка CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print'; // Загружаем как print для неблокирующей загрузки
    
    link.onload = () => {
      link.media = 'all'; // Переключаем на all после загрузки
    };
    
    // Fallback для старых браузеров
    link.onerror = () => {
      link.media = 'all';
    };
    
    document.head.appendChild(link);

    // Cleanup при размонтировании
    return () => {
      const linkToRemove = document.querySelector(`link[href="${href}"]`);
      const preloadToRemove = document.querySelector(`link[rel="preload"][href="${href}"]`);
      
      if (linkToRemove && linkToRemove.parentNode) {
        linkToRemove.parentNode.removeChild(linkToRemove);
      }
      if (preloadToRemove && preloadToRemove.parentNode) {
        preloadToRemove.parentNode.removeChild(preloadToRemove);
      }
    };
  }, [href, preload]);

  return null; // Компонент не рендерит ничего видимого
}
