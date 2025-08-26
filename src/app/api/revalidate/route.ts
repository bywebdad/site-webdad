import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

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

  revalidateTag('posts');
  if (slug) revalidateTag(`post:${slug}`);
  if (Array.isArray(tags)) tags.forEach((t) => revalidateTag(t));

  return NextResponse.json({ ok: true, revalidated: true, slug: slug ?? null });
}
