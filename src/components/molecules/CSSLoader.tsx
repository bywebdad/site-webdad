'use client';

import { useEffect, useState } from 'react';
import { loadCSSAsync, preloadCSS } from '@lib/css-optimizer';

interface CSSLoaderProps {
  criticalCSS?: string[];
  nonCriticalCSS?: string[];
  preloadCSS?: string[];
}

/**
 * Молекула для управления загрузкой CSS файлов
 * Оптимизирует производительность через приоритизацию критического CSS
 */
export default function CSSLoader({ 
  criticalCSS = [], 
  nonCriticalCSS = [], 
  preloadCSS: preloadList = [] 
}: CSSLoaderProps) {
  const [loadedCSS, setLoadedCSS] = useState<Set<string>>(new Set());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    const initializeCSS = async () => {
      // 1. Предзагружаем критические CSS файлы
      preloadList.forEach(href => {
        preloadCSS(href);
      });

      // 2. Загружаем критический CSS синхронно (если есть)
      for (const href of criticalCSS) {
        try {
          await loadCSSAsync(href);
          setLoadedCSS(prev => new Set([...prev, href]));
        } catch (error) {
          console.warn(`Failed to load critical CSS: ${href}`, error);
        }
      }

      // 3. Загружаем некритический CSS асинхронно с задержкой
      setTimeout(() => {
        nonCriticalCSS.forEach(async (href) => {
          try {
            await loadCSSAsync(href);
            setLoadedCSS(prev => new Set([...prev, href]));
          } catch (error) {
            console.warn(`Failed to load non-critical CSS: ${href}`, error);
          }
        });
      }, 100); // Небольшая задержка для приоритета критического контента

      setIsInitialized(true);
    };

    initializeCSS();
  }, [criticalCSS, nonCriticalCSS, preloadList, isInitialized]);

  // Добавляем класс когда весь CSS загружен
  useEffect(() => {
    const totalCSS = criticalCSS.length + nonCriticalCSS.length;
    if (loadedCSS.size === totalCSS && totalCSS > 0) {
      document.documentElement.classList.add('all-css-loaded');
    }
  }, [loadedCSS, criticalCSS.length, nonCriticalCSS.length]);

  return null;
}
