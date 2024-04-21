import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserInfoBox } from "./UserInfoBox";
import { Navigation } from "./Navigation";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=" py-2 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">FitCore</Link>
        <Navigation />
        {session?.user ? (
          <UserInfoBox session={session} />
        ) : (
          <Link className={buttonVariants()} href="/auth/login">
            Войти
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
