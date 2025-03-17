import { NextResponse } from "next/server";
import db from "@/db/db";

// Получаем пользователя по id
export async function GET(
  req: Request,
  { params }: { params: Promise<{ fullName: string }> }
) {
  const { fullName } = await params;
  const user = db
    .prepare("SELECT * FROM users WHERE full_name_id = ?")
    .get(fullName);

  if (!user) {
    return NextResponse.json(
      { error: "Пользователь не найден" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}
