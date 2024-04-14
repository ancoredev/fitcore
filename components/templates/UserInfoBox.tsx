import React from "react";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { SignOutButton } from "./signOutButton";

interface UserInfoBoxProps {
  session: Session | null;
}

export const UserInfoBox: React.FC<UserInfoBoxProps> = ({ session }) => {
  const {
    user: { username },
  } = session as Session;
  return (
    <div className="flex flex-row items-center gap-4">
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
        <AvatarFallback>{username?.toUpperCase().at(0)}</AvatarFallback>
      </Avatar>
      <span>{username}</span>
      <SignOutButton />
    </div>
  );
};
