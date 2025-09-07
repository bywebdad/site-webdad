/** @type {import('next').NextConfig} */
const s3Host = process.env.NEXT_PUBLIC_S3_HOST;
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
let cmsRemotePattern = null;
try {
  if (cmsUrl) {
    const u = new URL(cmsUrl);
    cmsRemotePattern = { protocol: u.protocol.replace(':', ''), hostname: u.hostname, ...(u.port ? { port: u.port } : {}) };
  }
} catch {}

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    tsconfigPaths: true,
  },
  images: {
    domains: ['images.unsplash.com', 's3.amazonaws.com'].concat(s3Host ? [s3Host] : []),
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'http', hostname: 'localhost', port: '3001' },
      { protocol: 'https', hostname: 's3.amazonaws.com' },
      ...(s3Host ? [{ protocol: 'https', hostname: s3Host }] : []),
      ...(cmsRemotePattern ? [cmsRemotePattern] : []),
    ],
  },
};

export default nextConfig;
