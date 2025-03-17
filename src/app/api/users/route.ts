import { NextResponse } from "next/server";
import db from "@/db/db";

// Получаем всех пользователей
export async function GET() {
  const users = db.prepare("SELECT * FROM users").all();
  return NextResponse.json(users);
}
