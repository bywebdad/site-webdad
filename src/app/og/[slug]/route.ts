import React from 'react';
import { ImageResponse } from 'next/og';
import { getPostBySlug, getSiteSettings } from '@lib/cms/payload';

export const runtime = 'edge';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const [post, settings] = await Promise.all([
    getPostBySlug(slug),
    getSiteSettings(),
  ]);
  const title = post?.title ?? 'NewSite';
  const brand = settings?.brandColor ?? '#FF7317';
  const site = settings?.siteName ?? 'NewSite';

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: brand,
          color: '#fff',
          padding: '64px',
        },
      },
      React.createElement(
        'div',
        { style: { fontSize: 56, fontWeight: 700, lineHeight: 1.2, maxWidth: 1100 } },
        title,
      ),
      React.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center', fontSize: 28 } },
        React.createElement('div', { style: { fontWeight: 600 } }, site),
        React.createElement('div', { style: { marginLeft: 16, opacity: 0.8 } }, 'blog'),
      ),
    ),
    { width: 1200, height: 630 },
  );
}
