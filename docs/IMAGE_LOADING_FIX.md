# Решение проблемы с загрузкой изображений на продакшене

## Проблема
На продакшене возникали ошибки 400 при загрузке изображений через Next.js Image Optimization API:
- `GET /_next/image?url=/projects/addwine/01.webp&w=1920&q=75` возвращал 400
- Next.js логи показывали: `The requested resource isn't a valid image for /projects/addwine/01.webp received null`
- Nginx ошибка: `nginx: [emerg] "server" directive is not allowed here in /etc/nginx/conf.d/default.conf:1`

## Причины

### 1. Неправильная конфигурация nginx
- Файл `nginx.conf` содержал блок `server` без обертки `http`
- Отсутствовала правильная обработка статических файлов из папки `public`
- Неправильные пути к статическим ресурсам

### 2. CSP блокировка Яндекс.Метрики
- Отсутствовал домен `mc.yandex.md` в CSP правилах
- Не было директивы `frame-src` для iframe метрики

## Решение

### 1. Исправление nginx.conf

**Было:**
```nginx
server {
    listen 80;
    # ... конфигурация без http блока
}
```

**Стало:**
```nginx
http {
    # Базовые настройки
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # MIME types
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;

        # Обслуживание статических файлов из public напрямую
        location /projects/ {
            alias /app/public/projects/;
            expires 1y;
            add_header Cache-Control "public, immutable";
            try_files $uri $uri/ =404;
        }

        location /brand/ {
            alias /app/public/brand/;
            expires 1y;
            add_header Cache-Control "public, immutable";
            try_files $uri $uri/ =404;
        }

        location /clients/ {
            alias /app/public/clients/;
            expires 1y;
            add_header Cache-Control "public, immutable";
            try_files $uri $uri/ =404;
        }

        # Настройки для изображений в корне public
        location ~* ^/[^/]+\.(jpg|jpeg|png|gif|ico|svg|webp)$ {
            root /app/public;
            expires 1y;
            add_header Cache-Control "public, immutable";
            try_files $uri $uri/ =404;
        }

        # Оптимизатор изображений Next.js
        location /_next/image {
            proxy_pass http://localhost:3000;
            # ... остальные proxy настройки
        }
    }
}
```

### 2. Обновление CSP правил

**Было:**
```typescript
const CSP_HEADER = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://mc.yandex.ru",
  // ...
  "frame-ancestors 'none'",
].join('; ');
```

**Стало:**
```typescript
const CSP_HEADER = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://mc.yandex.ru https://mc.yandex.md",
  "connect-src 'self' https: https://mc.yandex.ru https://mc.yandex.md",
  "frame-src 'self' https://mc.yandex.ru https://mc.yandex.md",
  "frame-ancestors 'none'",
].join('; ');
```

## Ключевые изменения

### nginx.conf
1. **Добавлен http блок** - исправлена синтаксическая ошибка nginx
2. **Правильные alias пути** - `/projects/` → `/app/public/projects/`
3. **Обработка статических файлов** - nginx напрямую отдает файлы из public
4. **Кэширование** - добавлены правильные заголовки Cache-Control

### middleware.ts
1. **Расширен script-src** - добавлен `https://mc.yandex.md`
2. **Расширен connect-src** - добавлен `https://mc.yandex.md`
3. **Добавлен frame-src** - разрешены iframe от Яндекс.Метрики

## Результат

✅ **Устранены ошибки 400** при загрузке изображений  
✅ **Исправлена nginx конфигурация** - сервер запускается без ошибок  
✅ **Решена проблема CSP** - Яндекс.Метрика работает корректно  
✅ **Оптимизировано кэширование** - статические файлы кэшируются на 1 год  

## Проверка

Для проверки работы изображений:

1. **Прямой доступ к статическим файлам:**
   ```
   https://webdad.by/projects/addwine/01.webp
   https://webdad.by/clients/addwine.png
   https://webdad.by/brand/01.webp
   ```

2. **Next.js Image Optimization:**
   ```
   https://webdad.by/_next/image?url=/projects/addwine/01.webp&w=1920&q=75
   ```

3. **Проверка CSP:**
   - Яндекс.Метрика должна загружаться без ошибок в консоли
   - Iframe метрики должен отображаться корректно

## Мониторинг

Для предотвращения подобных проблем в будущем:

1. **Логи nginx** - мониторить `/var/log/nginx/error.log`
2. **Next.js логи** - отслеживать ошибки Image Optimization
3. **CSP нарушения** - проверять консоль браузера на CSP ошибки
4. **Lighthouse** - регулярные проверки производительности изображений

## Связанные файлы

- `/nginx.conf` - основная конфигурация nginx
- `/nginx-docker.conf` - конфигурация для Docker
- `/src/middleware.ts` - CSP правила и middleware логика
- `/next.config.mjs` - конфигурация Next.js для изображений
