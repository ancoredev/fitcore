import { FcGoogle } from "react-icons/fc";

import Button from "./ui/Button";
import Input from "./ui/Input";
import Divider from "./ui/Divider";

const AuthForm = () => {
  return (
    <div className="lg:basis-1/2 w-full">
      <div className="md:w-4/6 w-5/6 mx-auto">
        <h1 className="text-xl text-center font-semibold text-neutral-700 mb-6 ">
          Войти в аккаунт
        </h1>
        <div className="block mb-4">
          <Button color="secondary">
            <FcGoogle size={20} /> Войти с Google
          </Button>
        </div>
        <Divider />
        <form action="" className="flex flex-col gap-4">
          <Input
            name="email"
            label="Email адрес"
            type="email"
            className="w-full"
          />
          <Input
            name="password"
            label="Пароль "
            type="password"
            className="w-full"
          />
          <Button color="primary">Войти</Button>
        </form>
      </div>
    </div>
  );
};

export { AuthForm };
