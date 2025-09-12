import path from 'path';
/** @type {import('next').NextConfig} */
const s3Host = process.env.NEXT_PUBLIC_S3_HOST;
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
let cmsHost = null;
let cmsPatterns = [];
try {
  if (cmsUrl) {
    const u = new URL(cmsUrl);
    cmsHost = u.hostname;
    const base = { hostname: u.hostname, pathname: '/media/**' };
    const parsed = { protocol: u.protocol.replace(':', ''), hostname: u.hostname, ...(u.port ? { port: u.port } : {}), pathname: '/media/**' };
    // Паттерны: точный из ENV, а также универсальные https/http без порта
    cmsPatterns = [
      parsed,
      { protocol: 'https', ...base },
      { protocol: 'http', ...base },
    ];
  }
} catch {}

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Включаем сжатие для production
  compress: true,
  
  // Настройка для современных браузеров (убираем полифилы)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Экспериментальные функции для оптимизации
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
    // Используем browserslist для SWC
    browsersListForSWC: true,
  },
  
  // Настройки для улучшения производительности
  poweredByHeader: false,
  generateEtags: false,
  
  // Оптимизация заголовков
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ],
      },
      {
        source: '/(.*)\\.(js|css|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  webpack: (config, { dev, isServer }) => {
    // Настройка алиасов
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@atoms': path.resolve(process.cwd(), 'src/components/atoms'),
      '@molecules': path.resolve(process.cwd(), 'src/components/molecules'),
      '@organisms': path.resolve(process.cwd(), 'src/components/organisms'),
      '@templates': path.resolve(process.cwd(), 'src/components/templates'),
      '@lib': path.resolve(process.cwd(), 'src/lib'),
      '@app': path.resolve(process.cwd(), 'src/app'),
      '@features': path.resolve(process.cwd(), 'src/components/features'),
    };

    // Оптимизация для production
    if (!dev && !isServer) {
      // Включаем tree shaking
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        // Разделение кода для лучшего кэширования
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            // Отдельный chunk для CSS
            styles: {
              name: 'styles',
              test: /\.(css|scss|sass)$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
      
      // Настройка минификации
      config.optimization.minimizer = config.optimization.minimizer || [];
      
      // Настройка для современных браузеров - убираем полифилы
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js/modules': false,
        // Отключаем пакетные полифилы для базовых возможностей (Baseline)
        'array.prototype.flat': false,
        'array.prototype.flatmap': false,
        'array.prototype.at': false,
        'object.fromentries': false,
        'object.hasown': false,
        'string.prototype.trimend': false,
        'string.prototype.trimstart': false,
      };
    }
    
    // Оптимизация для всех сборок
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  images: {
    // Форматы изображений для оптимизации
    formats: ['image/webp', 'image/avif'],
    // Размеры для responsive изображений - оптимизированные под реальное использование
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 466, 640],
    // Минимизируем качество для не критических изображений
    minimumCacheTTL: 31536000, // 1 год
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Убираем deprecated domains, используем только remotePatterns
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'localhost', port: '3001' },
      { protocol: 'https', hostname: 's3.amazonaws.com' },
      ...(s3Host ? [{ protocol: 'https', hostname: s3Host }] : []),
      ...(cmsPatterns.length ? cmsPatterns : []),
      // Явная страховка на случай отсутствия ENV: разрешаем admin.webdad.by/media/*
      { protocol: 'https', hostname: 'admin.webdad.by', pathname: '/media/**' },
    ],
  },
};

export default nextConfig;
