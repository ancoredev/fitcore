import { AuthForm } from "./AuthForm";
import { MainScreenSlider } from "./MainScreenSlider";

const AuthPage = () => {
  return (
    <div className="h-screen max-h-screen">
      <div className="container mx-auto flex flex-row items-center justify-center gap-4 h-full">
        <AuthForm />
        <MainScreenSlider />
      </div>
    </div>
  );
};

export { AuthPage };
