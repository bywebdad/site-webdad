import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
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
