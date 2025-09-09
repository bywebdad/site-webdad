import { NextResponse } from "next/server";

// Функция для отправки сообщения в Telegram
async function sendToTelegram(data: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source: string;
  page?: string;
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('Telegram bot token or chat ID not configured');
    return;
  }

  const message = `💬 Новое сообщение с сайта webdad.by!

👤 Имя: ${data.name}
📧 Email: ${data.email}${data.phone ? `\n📱 Телефон: ${data.phone}` : ''}
📍 Источник: ${data.source}${data.page ? `\n🌐 Страница: ${data.page}` : ''}${data.message ? `\n💭 Сообщение: ${data.message}` : ''}
⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    console.log('Contact message sent to Telegram successfully');
  } catch (error) {
    console.error('Failed to send contact message to Telegram:', error);
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, message, page } = data ?? {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!name || String(name).trim().length < 2) {
      return NextResponse.json({ error: "INVALID_NAME" }, { status: 400 });
    }
    if (!email || !emailRegex.test(String(email))) {
      return NextResponse.json({ error: "INVALID_EMAIL" }, { status: 400 });
    }

    // Отправляем данные в Telegram
    await sendToTelegram({
      name,
      email,
      phone,
      message,
      source: "contact_modal",
      page: page || (typeof window !== "undefined" ? window.location.href : undefined),
    });

    // Логируем на сервере
    console.log("CONTACT_FORM:", {
      name,
      email,
      phone,
      message,
      ts: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 });
  }
}
