import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import { db } from "./db";
import { credentialsSchema } from "./schemas";


export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt'
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@mail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const validatedFields = credentialsSchema.safeParse(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const existingUser = await db.user.findUnique({
          where: { email: email }
        })
        if (!existingUser) return null;

        const passwordMatch = await compare(password, existingUser.password);
        if (!passwordMatch) return null;

        
        return existingUser;
      }
    }),
  ],
  callbacks: {
    async jwt ({ token }) {
      if (!token.sub) return token;

      const existingUser = await db.user.findUnique({
        where: { id: token.sub }
      })

      if (!existingUser) return token;

      token.role = existingUser.role; 
      token.username = existingUser.username;

      return token;
    },
    async session({ session, token }) {
      if(token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      
      return session;
    }
  }
}