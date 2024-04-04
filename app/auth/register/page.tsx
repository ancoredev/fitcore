import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateUserForm from "./components/CreateUserForm";

const RegisterPage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Добро пожаловать в Fitcore
          </CardTitle>
          <CardDescription className="text-center">
            Создайте аккаунт
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateUserForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default RegisterPage;
