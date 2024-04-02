import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { CredentialsForm } from "../components/CredentialsForm";
import { SocialsForm } from "../components/SocialsForm";

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

          <a className="w-full block text-center text-sm text-slate-600">
            Нет аккаунта? Зарегистрируйтесь
          </a>
          <Divider className="bg-slate-200" />
          {/* TODO: Сделать вход через почту */}

          <SocialsForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
