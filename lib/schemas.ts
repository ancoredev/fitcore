import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(1, { message: "Введите имя пользователя" }),
  email: z
    .string()
    .min(1, { message: "Введите email" })
    .email({ message: "Некорректный email" }),
  password: z
    .string()
    .min(1, { message: "Введите пароль" })
    .min(8, "Слишком короткий пароль"),
});

export const credentialsSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Введите email" })
    .email({ message: "Некорректный email" }),
  password: z.string().min(1, { message: "Введите пароль" }),
});