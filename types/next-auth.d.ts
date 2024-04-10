import { DefaultUser } from 'next-auth';


declare module 'next-auth' {
    interface User extends DefaultUser {
        role?: "ADMIN" | "USER";
        username?: string
    }
    interface Session { 
        user: User
    }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "USER";
    username?: string;
  }
}