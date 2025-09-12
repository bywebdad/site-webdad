#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Конфигурация для мониторинга
const config = {
  url: process.env.SITE_URL || 'http://localhost:3000',
  outputDir: './performance-reports',
  thresholds: {
    fcp: 1800, // First Contentful Paint
    lcp: 2500, // Largest Contentful Paint
    cls: 0.1,  // Cumulative Layout Shift
    fid: 100,  // First Input Delay
    ttfb: 600  // Time to First Byte
  }
};

// Создаем директорию для отчетов
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Функция для запуска Lighthouse
function runLighthouse() {
  console.log('🚀 Запуск анализа производительности...');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = path.join(config.outputDir, `lighthouse-${timestamp}.json`);
  
  try {
    const command = `npx lighthouse ${config.url} --output=json --output-path=${outputPath} --chrome-flags="--headless --no-sandbox" --only-categories=performance`;
    
    execSync(command, { stdio: 'inherit' });
    
    // Читаем результаты
    const raw = fs.readFileSync(outputPath, 'utf8');
    const parsed = JSON.parse(raw);
    return analyzeResults(parsed);
    
  } catch (error) {
    console.error('❌ Ошибка при запуске Lighthouse:', error && error.message ? error.message : error);
    return null;
  }
}

// Анализ результатов
function analyzeResults(results) {
  // Lighthouse v12 CLI пишет LHR напрямую (а не { lhr: {...} })
  const lhr = results && results.lhr ? results.lhr : results;
  if (!lhr || !lhr.audits || !lhr.categories) {
    throw new Error('Invalid Lighthouse JSON format: missing audits/categories');
  }

  const getAudit = (id) => lhr.audits && lhr.audits[id];

  const fcp = getAudit('first-contentful-paint')?.numericValue ?? NaN;
  const lcp = getAudit('largest-contentful-paint')?.numericValue ?? NaN;
  const cls = getAudit('cumulative-layout-shift')?.numericValue ?? NaN;
  // В новых версиях Lighthouse метрика входной задержки менялась
  const fid = getAudit('max-potential-fid')?.numericValue ?? getAudit('total-blocking-time')?.numericValue ?? NaN;
  const ttfb = getAudit('server-response-time')?.numericValue ?? NaN;
  const performanceScore = (lhr.categories.performance?.score ?? 0) * 100;

  const metrics = { fcp, lcp, cls, fid, ttfb, performanceScore };

  console.log('\n📊 Результаты анализа производительности:');
  console.log('==========================================');
  console.log(`🎯 Общий балл производительности: ${metrics.performanceScore.toFixed(1)}/100`);
  console.log(`⚡ First Contentful Paint: ${metrics.fcp.toFixed(0)}ms ${getStatus(metrics.fcp, config.thresholds.fcp)}`);
  console.log(`🖼️  Largest Contentful Paint: ${metrics.lcp.toFixed(0)}ms ${getStatus(metrics.lcp, config.thresholds.lcp)}`);
  console.log(`📐 Cumulative Layout Shift: ${metrics.cls.toFixed(3)} ${getStatus(metrics.cls, config.thresholds.cls, true)}`);
  console.log(`👆 Max Potential FID: ${metrics.fid.toFixed(0)}ms ${getStatus(metrics.fid, config.thresholds.fid)}`);
  console.log(`🌐 Time to First Byte: ${metrics.ttfb.toFixed(0)}ms ${getStatus(metrics.ttfb, config.thresholds.ttfb)}`);

  // Рекомендации по улучшению
  generateRecommendations(lhr, metrics);

  return metrics;
}

// Получение статуса метрики
function getStatus(value, threshold, reverse = false) {
  if (Number.isNaN(value)) return '❔';
  const isGood = reverse ? value <= threshold : value <= threshold;
  return isGood ? '✅' : '❌';
}

// Генерация рекомендаций
function generateRecommendations(lhr, metrics) {
  console.log('\n💡 Рекомендации по улучшению:');
  console.log('==============================');

  const opportunities = lhr.audits || {};
  
  // Проверяем основные проблемы
  if (metrics.ttfb > config.thresholds.ttfb) {
    console.log('🔧 Медленный ответ сервера:');
    console.log('   - Оптимизируйте middleware');
    console.log('   - Включите кэширование на уровне сервера');
    console.log('   - Рассмотрите использование CDN');
  }

  if (metrics.lcp > config.thresholds.lcp) {
    console.log('🔧 Медленная загрузка основного контента:');
    console.log('   - Оптимизируйте изображения (WebP, AVIF)');
    console.log('   - Используйте preload для критических ресурсов');
    console.log('   - Минимизируйте CSS и JS');
  }

  if (metrics.cls > config.thresholds.cls) {
    console.log('🔧 Нестабильность макета:');
    console.log('   - Задайте размеры для изображений и видео');
    console.log('   - Избегайте вставки контента над существующим');
    console.log('   - Используйте CSS aspect-ratio');
  }

  // Проверяем возможности оптимизации
  if (opportunities['unused-css-rules'] && opportunities['unused-css-rules'].score < 1) {
    console.log('🔧 Неиспользуемый CSS обнаружен - рассмотрите его удаление');
  }

  if (opportunities['unused-javascript'] && opportunities['unused-javascript'].score < 1) {
    console.log('🔧 Неиспользуемый JavaScript обнаружен - рассмотрите code splitting');
  }

  if (opportunities['render-blocking-resources'] && opportunities['render-blocking-resources'].score < 1) {
    console.log('🔧 Блокирующие рендеринг ресурсы - используйте async/defer');
  }
}

// Функция для непрерывного мониторинга
function startContinuousMonitoring(interval = 300000) { // 5 минут по умолчанию
  console.log(`🔄 Запуск непрерывного мониторинга каждые ${interval / 1000} секунд`);
  
  setInterval(() => {
    runLighthouse();
  }, interval);
}

// Основная функция
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--continuous')) {
    const interval = parseInt(args[args.indexOf('--interval') + 1]) || 300000;
    startContinuousMonitoring(interval);
  } else {
    runLighthouse();
  }
}

// Запуск скрипта
if (require.main === module) {
  main();
}

module.exports = { runLighthouse, analyzeResults };
