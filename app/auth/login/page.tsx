import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CredentialsForm } from "./components/CredentialsForm";
import { Separator } from "@/components/ui/separator";
import { SocialsForm } from "./components/SocialsForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Добро пожаловать в Fitcore
          </CardTitle>
          <CardDescription className="text-center">
            Авторизуйтесь чтобы получить доступ к сервису
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CredentialsForm />

          <Link
            className="w-full block text-center text-sm text-slate-600"
            href="/auth/register"
          >
            Нет аккаунта? Зарегистрируйтесь
          </Link>
          <Separator className="my-6" />
          {/* TODO: Сделать вход через почту */}

          <SocialsForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
