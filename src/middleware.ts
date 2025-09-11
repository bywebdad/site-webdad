import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Редирект с www на без www для избежания дублированного контента
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  // Добавляем заголовки для сжатия статических ресурсов
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    // Устанавливаем заголовки для кэширования и сжатия
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    
    // Указываем, что контент может быть сжат
    if (request.headers.get('accept-encoding')?.includes('gzip')) {
      response.headers.set('Content-Encoding', 'gzip');
    }
    
    if (request.headers.get('accept-encoding')?.includes('br')) {
      response.headers.set('Content-Encoding', 'br');
    }
  }

  // Добавляем заголовки безопасности и производительности
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy для предотвращения смешанного контента
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://mc.yandex.ru",
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
  
  response.headers.set('Content-Security-Policy', csp);
  
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
