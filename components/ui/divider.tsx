import { cn } from "@/lib/utils";
import React from "react";
import { FC } from "react";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return (
    <div className={cn("w-full h-[1px] my-6", className)} {...props}></div>
  );
};
