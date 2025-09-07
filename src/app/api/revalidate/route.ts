import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

const resolveSite = (req: NextRequest): 'by' | 'pro' => {
  const mode = (process.env.NEXT_PUBLIC_SITE_MODE || '').toLowerCase();
  if (mode === 'by' || mode === 'pro') return mode as 'by' | 'pro';
  try {
    const host = (req.headers.get('host') || '').toLowerCase();
    if (host.includes('pro')) return 'pro';
  } catch {}
  return 'by';
};

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const qpSecret = url.searchParams.get('secret');
  let body: any = {};
  try { body = await req.json(); } catch {}
  const secret = qpSecret || body?.secret;
  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: 'Invalid secret' }, { status: 401 });
  }

  const slug = url.searchParams.get('slug') || body?.slug || undefined;
  const tags: string[] = body?.tags || [];
  const site = resolveSite(req);

  // Совместимость: старые теги
  revalidateTag('posts');
  if (slug) revalidateTag(`post:${slug}`);

  // Site-specific теги
  revalidateTag(`posts:${site}`);
  if (slug) revalidateTag(`post:${site}:${slug}`);
  if (Array.isArray(tags)) tags.forEach((t) => revalidateTag(t));

  return NextResponse.json({ ok: true, revalidated: true, slug: slug ?? null });
}
