import { NextResponse } from 'next/server';
import { draftMode } from 'next/headers';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://webdad.by').replace(/\/$/, '');

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  if (secret !== process.env.PREVIEW_SECRET || !slug) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }
  const dm = await draftMode();
  dm.enable();
  const to = `${SITE_URL}/blog/${slug}?preview=1`;
  return NextResponse.redirect(to);
}
