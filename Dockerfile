# Multi-stage Dockerfile for Next.js (App Router) with nginx compression
# Build with: docker build -t ghcr.io/bywebdad/site-webdad .

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Install all deps (dev deps needed for build)
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build with optimizations enabled
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install nginx for serving static files with compression
RUN apk add --no-cache nginx nginx-mod-http-brotli

# Copy nginx configuration
# Root nginx.conf with http { include conf.d/*.conf; }
COPY nginx-root.conf /etc/nginx/nginx.conf
# Site server config (include-style)
COPY nginx-docker.conf /etc/nginx/conf.d/default.conf

# Создаем необходимые директории для nginx
RUN mkdir -p /var/log/nginx /var/cache/nginx /var/run/nginx

# Standalone runtime (configured via output: 'standalone' in next.config)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# КРИТИЧНО: Копируем все статические файлы включая изображения проектов
COPY --from=builder /app/public ./public

# Проверяем, что файлы скопированы правильно
RUN ls -la /app/public/ && \
    ls -la /app/public/projects/ && \
    ls -la /app/public/clients/ && \
    ls -la /app/public/brand/

# Create startup script with proper error handling
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'set -e' >> /app/start.sh && \
    echo 'echo "Starting nginx..."' >> /app/start.sh && \
    echo 'nginx -t' >> /app/start.sh && \
    echo 'nginx &' >> /app/start.sh && \
    echo 'echo "Starting Next.js server..."' >> /app/start.sh && \
    echo 'exec node server.js' >> /app/start.sh && \
    chmod +x /app/start.sh

# Expose ports
EXPOSE 80 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

CMD ["/app/start.sh"]
