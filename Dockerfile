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

FROM nginx:alpine AS nginx-stage
# Install brotli module for nginx
RUN apk add --no-cache nginx-mod-http-brotli
COPY nginx-docker.conf /etc/nginx/conf.d/default.conf

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install nginx for serving static files with compression
RUN apk add --no-cache nginx nginx-mod-http-brotli

# Copy nginx configuration
COPY --from=nginx-stage /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Standalone runtime (configured via output: 'standalone' in next.config)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Копируем все статические файлы включая изображения проектов
COPY --from=builder /app/public ./public

# Create startup script
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'nginx &' >> /app/start.sh && \
    echo 'node server.js' >> /app/start.sh && \
    chmod +x /app/start.sh

EXPOSE 80 3000
CMD ["/app/start.sh"]
