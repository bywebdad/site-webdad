'use client';

import { useEffect } from 'react';

interface AsyncCSSProps {
  href: string;
  media?: string;
  onLoad?: () => void;
}

/**
 * Компонент для асинхронной загрузки CSS файлов
 * Устраняет блокирующие запросы CSS
 */
export default function AsyncCSS({ href, media = 'all', onLoad }: AsyncCSSProps) {
  useEffect(() => {
    // Проверяем, не загружен ли уже этот CSS
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) return;

    // Создаем link элемент для асинхронной загрузки
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print'; // Загружаем как print, чтобы не блокировать рендеринг
    
    link.onload = () => {
      link.media = media; // Переключаем на нужный media после загрузки
      onLoad?.();
    };
    
    // Добавляем в head
    document.head.appendChild(link);
    
    // Fallback для браузеров без JS
    const noscriptLink = document.createElement('noscript');
    noscriptLink.innerHTML = `<link rel="stylesheet" href="${href}" media="${media}">`;
    document.head.appendChild(noscriptLink);

    // Cleanup при размонтировании
    return () => {
      const linkToRemove = document.querySelector(`link[href="${href}"]`);
      const noscriptToRemove = document.querySelector(`noscript:has(link[href="${href}"])`);
      
      if (linkToRemove) {
        document.head.removeChild(linkToRemove);
      }
      if (noscriptToRemove) {
        document.head.removeChild(noscriptToRemove);
      }
    };
  }, [href, media, onLoad]);

  return null; // Этот компонент не рендерит ничего видимого
}
