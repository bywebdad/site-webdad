import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, source, page, agree } = data ?? {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!name || String(name).trim().length < 2) {
      return NextResponse.json({ error: "INVALID_NAME" }, { status: 400 });
    }
    if (!email || !emailRegex.test(String(email))) {
      return NextResponse.json({ error: "INVALID_EMAIL" }, { status: 400 });
    }
    if (agree !== true) {
      return NextResponse.json({ error: "CONSENT_REQUIRED" }, { status: 400 });
    }

    // Логируем на сервере как базовую реализацию при отсутствии внешних интеграций
    console.log("REQUEST_FORM:", {
      name,
      email,
      phone,
      source: source ?? "projects",
      page: page ?? null,
      ts: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 });
  }
}
