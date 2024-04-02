import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CredentialsForm = () => {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="example@mail.com" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" placeholder="*****" />
        </div>
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};
