import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

type TSocialAuth = {
  label: string;
  icon: IconType;
};

const socials: TSocialAuth[] = [
  {
    label: "Войти через Google",
    icon: FaGoogle,
  },
  {
    label: "Войти через ВКонтакте",
    icon: SlSocialVkontakte,
  },
  {
    label: "Войти через Github",
    icon: FaGithub,
  },
];

export const SocialsForm = () => {
  return (
    <div className="grid w-full items-center gap-1">
      {socials.map((item, index) => (
        <Button key={index}>
          {item.label} <item.icon className="ml-2 w-5 h-5" />
        </Button>
      ))}
    </div>
  );
};

