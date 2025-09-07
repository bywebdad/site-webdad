# Multi-stage Dockerfile for Next.js (App Router)
# Build with: docker build -t ghcr.io/bywebdad/english-brest.by .

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Install all deps (dev deps needed for build)
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Standalone runtime (configured via output: 'standalone' in next.config)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node","server.js"]
