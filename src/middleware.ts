import { NextRequest, NextResponse } from 'next/server';

// Кэшируем CSP строку для избежания повторного создания
const CSP_HEADER = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://scripts.clarity.ms https://mc.yandex.ru",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https: https://www.google-analytics.com https://analytics.google.com https://www.clarity.ms https://mc.yandex.ru",
  "media-src 'self' https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join('; ');

// Регулярное выражение для статических ресурсов
const STATIC_ASSETS_REGEX = /\.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|eot)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const forwardedHost = request.headers.get('x-forwarded-host') || hostname;
  const forwardedProto = request.headers.get('x-forwarded-proto') || 'https';
  const targetHost = forwardedHost.startsWith('www.') ? forwardedHost.slice(4) : forwardedHost;
  
  // Нормализуем домен и порт: www -> apex, убираем явный порт, фиксируем протокол
  if (hostname !== targetHost || request.nextUrl.port) {
    const url = request.nextUrl.clone();
    url.hostname = targetHost;
    url.port = '';
    url.protocol = `${forwardedProto}:`;
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
