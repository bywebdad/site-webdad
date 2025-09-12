import { NextRequest, NextResponse } from 'next/server';

// Кэшируем CSP строку для избежания повторного создания
const CSP_HEADER = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://scripts.clarity.ms https://mc.yandex.ru https://mc.yandex.md",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data:",
<<<<<<< HEAD
  "connect-src 'self' https: https://www.google-analytics.com https://analytics.google.com https://www.clarity.ms https://mc.yandex.ru https://mc.yandex.md",
=======
  "connect-src 'self' https: https://www.google-analytics.com https://analytics.google.com https://www.clarity.ms https://mc.yandex.ru",
  "frame-src 'self' https://www.googletagmanager.com https://mc.yandex.ru https://mc.yandex.md https://www.clarity.ms",
>>>>>>> fix/rollback-to-stable-state
  "media-src 'self' https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-src 'self' https://mc.yandex.ru https://mc.yandex.md",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join('; ');

// Регулярное выражение для статических ресурсов
const STATIC_ASSETS_REGEX = /\.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|eot)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const env = process.env.NODE_ENV || 'development';
  const isDev = env !== 'production';
  const hostHeader = request.headers.get('host') || '';
  const [hostOnly, hostPort] = hostHeader.split(':');
  const forwardedHost = request.headers.get('x-forwarded-host') || '';
  const forwardedProto = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '') || 'http';
  const hasProxy = Boolean(forwardedHost || request.headers.get('x-forwarded-proto'));
  const isIpHost = /^\d+\.\d+\.\d+\.\d+$/.test(hostOnly) || hostOnly === 'localhost';

  // Безопасная канониализация хоста: только в production и ТОЛЬКО за прокси.
  // В dev, при обращении по IP/localhost или с явным портом — не редиректим, чтобы не ломать доступ извне.
  if (!isDev && hasProxy) {
    const targetFromProxy = (forwardedHost || hostHeader).replace(/^www\./, '');
    const targetHostname = targetFromProxy.split(':')[0];
    const needHostFix = hostOnly !== targetHostname;
    const needPortFix = Boolean(hostPort);
    if (needHostFix || needPortFix) {
      const url = request.nextUrl.clone();
      url.hostname = targetHostname;
      url.port = '';
      url.protocol = `${forwardedProto}:`;
      return NextResponse.redirect(url, 301);
    }
  }

  // Редиректы для старых английских URL
  if (pathname === '/en') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  if (pathname === '/en/about') {
    const url = request.nextUrl.clone();
    url.pathname = '/company';
    return NextResponse.redirect(url, 301);
  }

  if (pathname.startsWith('/en/cases/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace('/en/cases/', '/projects/');
    return NextResponse.redirect(url, 301);
  }

  if (pathname === '/en/services/engineering') {
    const url = request.nextUrl.clone();
    url.pathname = '/services/development';
    return NextResponse.redirect(url, 301);
  }

  // Редирект со старых URL /cases/* на новые /projects/*
  if (pathname.startsWith('/cases/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace('/cases/', '/projects/');
    return NextResponse.redirect(url, 301);
  }

  // Редирект trailing slash к каноническому URL (кроме корня)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // Раннее возвращение для статических ресурсов Next.js
  if (pathname.startsWith('/_next/static/')) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }

  // Раннее возвращение для других статических ресурсов
  if (STATIC_ASSETS_REGEX.test(pathname)) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }

  const response = NextResponse.next();

  // Устанавливаем только критически важные заголовки для HTML страниц
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Content-Security-Policy', CSP_HEADER);
  
  // Preload только для главной страницы с оптимизированными размерами
  if (pathname === '/') {
    response.headers.set('Link', '</brand/Logo.webp>; rel=preload; as=image, </_next/image?url=%2Fbrand%2F01.webp&w=640&q=85>; rel=preload; as=image');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
