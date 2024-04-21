import React from "react";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ProfileMenu } from "./ProfileMenu";

interface UserInfoBoxProps {
  session: Session | null;
}

export const UserInfoBox: React.FC<UserInfoBoxProps> = ({ session }) => {
  const { user } = session as Session;
  return (
    <div className="flex flex-row items-center gap-4">
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
        <AvatarFallback>{user.username?.toUpperCase().at(0)}</AvatarFallback>
      </Avatar>
      <ProfileMenu user={session?.user} />
    </div>
  );
};
