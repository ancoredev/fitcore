import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary";
  children: React.ReactNode;
  size?: "full" | "content";
}

const buttonTheme = {
  primary:
    "bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white",
  secondary:
    "bg-white border border-neutral-500 text-neutral-600 hover:border-neutral-700 hover:text-neutral-800",
};

const buttonSize = {
  full: "w-full",
  content: "",
};

const Button: FC<ButtonProps> = ({
  color,
  children,
  size = "full",
  ...rest
}) => {
  return (
    <button
      className={`h-10 px-6 flex items-center justify-center gap-4 text-sm outline-none cursor-pointer rounded transition ${buttonTheme[color]} ${buttonSize[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
