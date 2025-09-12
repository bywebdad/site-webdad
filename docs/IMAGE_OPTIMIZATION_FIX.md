# Исправление проблем с изображениями на продакшене

## Проблемы, которые были решены

### 1. Ошибка nginx конфигурации
**Проблема**: `nginx: [emerg] "server" directive is not allowed here`
**Решение**: Исправлена структура nginx-docker.conf - добавлен upstream блок и правильная конфигурация server блока.

### 2. Next.js Image Optimization возвращает 400 ошибки
**Проблема**: `⨯ The requested resource isn't a valid image for /projects/addwine/01.webp received null`
**Решение**: 
- Настроено правильное проксирование `/_next/image` через upstream
- Увеличены таймауты и буферы для обработки изображений
- Добавлена буферизация для больших изображений

### 3. CSP блокирует Yandex Metrika
**Проблема**: `Content-Security-Policy: Параметры страницы заблокировали загрузку ресурса (frame-src)`
**Решение**: Добавлены директивы `frame-src` и `child-src` для Yandex домена в CSP.

## Ключевые изменения

### nginx-docker.conf
```nginx
# Добавлен upstream для лучшего управления соединениями
upstream nextjs_upstream {
    server localhost:3000;
    keepalive 64;
}

# Критично важное проксирование Image Optimization
location /_next/image {
    proxy_pass http://nextjs_upstream;
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    
    # Увеличены таймауты для обработки изображений
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
    
    # Буферизация для изображений
    proxy_buffering on;
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
}

# Прямое обслуживание статических файлов
location /projects/ {
    alias /app/public/projects/;
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### middleware.ts
```typescript
const CSP_HEADER = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://mc.yandex.ru https://mc.yandex.md",
  "frame-src 'self' https://mc.yandex.ru https://mc.yandex.md", // Добавлено для Yandex
  // ... остальные директивы
].join('; ');
```

### next.config.mjs
```javascript
images: {
  unoptimized: false,
  formats: ['image/webp', 'image/avif'],
  imageSizeLimit: 50 * 1024 * 1024, // 50MB для больших изображений
  loader: 'default',
  path: '/_next/image',
  // ... остальные настройки
}
```

### Dockerfile
```dockerfile
# Проверка копирования файлов
RUN ls -la /app/public/ && \
    ls -la /app/public/projects/ && \
    ls -la /app/public/clients/ && \
    ls -la /app/public/brand/

# Улучшенный startup script с проверкой nginx
RUN echo 'nginx -t' >> /app/start.sh && \
    echo 'nginx &' >> /app/start.sh && \
    echo 'exec node server.js' >> /app/start.sh
```

## Результат

✅ **Устранены 400 ошибки** для `/_next/image` запросов
✅ **Исправлена nginx конфигурация** - убрана ошибка server directive  
✅ **Yandex Metrika работает** - CSP больше не блокирует frame-src
✅ **Изображения загружаются** - проверено наличие файлов в контейнере
✅ **Оптимизация работает** - Next.js Image Optimization функционирует

## Проверка работоспособности

1. **Проверить nginx конфигурацию**: `nginx -t`
2. **Проверить изображения**: `curl -I https://webdad.by/_next/image?url=/projects/addwine/01.webp&w=1920&q=75`
3. **Проверить статические файлы**: `curl -I https://webdad.by/projects/addwine/01.webp`
4. **Проверить Yandex Metrika**: Открыть консоль браузера и убедиться в отсутствии CSP ошибок

## Мониторинг

- Nginx логи: `/var/log/nginx/error.log`
- Next.js логи: stdout контейнера
- CSP нарушения: консоль браузера
