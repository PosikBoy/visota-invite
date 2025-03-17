import { NextResponse } from "next/server";
import db from "@/db/db";
import TelegramBot from "node-telegram-bot-api";

// Функция для обработки POST-запроса
export async function POST(req: Request) {
  try {
    // Извлекаем данные из тела запроса
    const { fullNameId } = await req.json();

    const TELEGRAM_BOT_TOKEN = "7603451776:AAHMbsUXZrQmKmyzEbL1UWhCVsgmKF8RHPI";
    const CHAT_ID = "-4664658409";

    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
    // Проверяем, существует ли пользователь с таким fullName
    const user = db
      .prepare("SELECT * FROM users WHERE full_name_id = ?")
      .get(fullNameId);

    if (!user) {
      return NextResponse.json(
        { error: "Пользователь не найден" },
        { status: 404 }
      );
    }

    // Обновляем запись пользователя в базе данных, отмечая приглашение
    db.prepare(
      "UPDATE users SET is_invitation_accepted = ? WHERE full_name_id = ?"
    ).run("1", fullNameId);

    bot.sendMessage(
      CHAT_ID,
      `Пользователь ${fullNameId} принял приглашение #принятие`
    );

    // Возвращаем успешный ответ
    return NextResponse.json(
      { message: "Приглашение успешно принято" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    // Обрабатываем возможные ошибки
    return NextResponse.json(
      { error: "Ошибка при обработке запроса" },
      { status: 500 }
    );
  }
}
