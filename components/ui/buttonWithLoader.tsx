import React from "react";
import { Button, ButtonProps } from "./button";
import { Loader2 } from "lucide-react";

interface ButtonWithLoaderProps extends ButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export const ButtonWithLoader: React.FC<ButtonWithLoaderProps> = ({
  children,
  isLoading,
  ...props
}) => {
  return (
    <Button {...props} disabled={isLoading}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};
