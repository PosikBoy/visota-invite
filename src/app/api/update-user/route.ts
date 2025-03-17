import { NextResponse } from "next/server";
import db from "@/db/db";

// Функция для обработки POST-запроса
export async function POST(req: Request) {
  try {
    // Извлекаем данные из тела запроса
    const { fullNameId, newData } = await req.json();

    // Проверяем, существует ли пользователь с таким fullName
    const user = db
      .prepare("SELECT * FROM users WHERE full_name_id = ?")
      .get(fullNameId);

    if (!user) {
      return NextResponse.json(
        { error: "Пользователь не существует" },
        { status: 404 }
      );
    }

    // Обновляем запись пользователя в базе данных, отмечая приглашение
    db.prepare(
      "UPDATE users SET  full_name = ?, full_name_id = ? WHERE full_name_id = ?"
    ).run(newData.fullName, newData.fullNameId, fullNameId);

    // Возвращаем успешный ответ
    return NextResponse.json({ message: "ЮЗЕР ДОБАВЛЕН" }, { status: 200 });
  } catch (error) {
    console.log(error);
    // Обрабатываем возможные ошибки
    return NextResponse.json(
      { error: "Ошибка при обработке запроса" },
      { status: 500 }
    );
  }
}
