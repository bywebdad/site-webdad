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
ENV HOSTNAME=0.0.0.0
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose ports
EXPOSE 3000

CMD ["node", "server.js"]
