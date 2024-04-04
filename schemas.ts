import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(1, "Имя пользователя обязательно").max(100),
  email: z.string().min(1, "Email обязателен").email("Некорректный email"),
  password: z
    .string()
    .min(8, "Пароль не может содержать меньше 8 символов")
});