import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserInfoBox } from "./UserInfoBox";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">FitCore</Link>
        {session?.user ? (
          <UserInfoBox session={session} />
        ) : (
          <>
            <Link className={buttonVariants()} href="/auth/login">
              Войти
            </Link>
            <Link className={buttonVariants()} href="/auth/register">
              Зарегистрироваться
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
