import { NextResponse } from "next/server";
import { hash } from "bcrypt" 

import { db } from "@/lib/db";
import { userSchema } from "@/schemas";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const isEmailExists = await db.user.findUnique({
      where: {
        email: email
      }
    });
    if (isEmailExists) {
      return NextResponse.json({ user: null, message: "Пользователь с таким email уже существует"}, { status: 409 });
    }
    
    const isUsernameExists = await db.user.findUnique({
      where: {
        username: username
      }
    });
    if (isUsernameExists) {
      return NextResponse.json({ user: null, message: "Пользователь с таким username уже существует"}, { status: 409 });
    }


    const passwordHash = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: passwordHash,
      }
    })

    const { password: pass, ...safeData} = newUser;
    return NextResponse.json({ user: safeData, message: "Пользователь успешно создан"}, { status: 201 });
  } catch(error) {
    return NextResponse.json({ message: "Что то пошло не так"}, { status: 500 });
  }
}