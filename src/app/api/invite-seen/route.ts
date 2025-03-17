import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";

// Функция для обработки POST-запроса
export async function POST(req: Request) {
  try {
    // Извлекаем данные из тела запроса
    const { fullNameId } = await req.json();

    const TELEGRAM_BOT_TOKEN = "7603451776:AAHMbsUXZrQmKmyzEbL1UWhCVsgmKF8RHPI";
    const CHAT_ID = "-4664658409";

    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

    bot.sendMessage(CHAT_ID, `Пользователь ${fullNameId} открыл приглашение #открытие`);

    // Возвращаем успешный ответ
    return NextResponse.json(
      { message: "Приглашение успешно открыто" },
      { status: 200 }
    );
  } catch (error) {
    // Обрабатываем возможные ошибки
    return NextResponse.json(
      { error: "Ошибка при обработке запроса" },
      { status: 500 }
    );
  }
}
