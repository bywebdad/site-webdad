import path from 'path';
/** @type {import('next').NextConfig} */
const s3Host = process.env.NEXT_PUBLIC_S3_HOST;
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
let cmsHost = null;
let cmsPatterns = [];
try {
  if (cmsUrl) {
    const u = new URL(cmsUrl);
    cmsHost = u.hostname;
    const base = { hostname: u.hostname, pathname: '/media/**' };
    const parsed = { protocol: u.protocol.replace(':', ''), hostname: u.hostname, ...(u.port ? { port: u.port } : {}), pathname: '/media/**' };
    // Паттерны: точный из ENV, а также универсальные https/http без порта
    cmsPatterns = [
      parsed,
      { protocol: 'https', ...base },
      { protocol: 'http', ...base },
    ];
  }
} catch {}

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@atoms': path.resolve(process.cwd(), 'src/components/atoms'),
      '@molecules': path.resolve(process.cwd(), 'src/components/molecules'),
      '@organisms': path.resolve(process.cwd(), 'src/components/organisms'),
      '@templates': path.resolve(process.cwd(), 'src/components/templates'),
      '@lib': path.resolve(process.cwd(), 'src/lib'),
      '@app': path.resolve(process.cwd(), 'src/app'),
      '@features': path.resolve(process.cwd(), 'src/components/features'),
    };
    return config;
  },
  images: {
    domains: ['images.unsplash.com', 's3.amazonaws.com']
      .concat(s3Host ? [s3Host] : [])
      .concat(cmsHost ? [cmsHost] : []),
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'http', hostname: 'localhost', port: '3001' },
      { protocol: 'https', hostname: 's3.amazonaws.com' },
      ...(s3Host ? [{ protocol: 'https', hostname: s3Host }] : []),
      ...(cmsPatterns.length ? cmsPatterns : []),
      // Явная страховка на случай отсутствия ENV: разрешаем admin.webdad.by/media/*
      { protocol: 'https', hostname: 'admin.webdad.by', pathname: '/media/**' },
      { protocol: 'http', hostname: 'admin.webdad.by', pathname: '/media/**' },
    ],
  },
};

export default nextConfig;
