import { NextAuthOptions, User } from "next-auth";
import withAuth from "next-auth/middleware";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (
            credentials?.username === process.env.USERNAME_LOGIN &&
            credentials?.password === process.env.PASSWORD_LOGIN
          ) {
            const user: User = { id: "", name: "Ayase" };
            return user;
          }

          return null;
        } catch (error) {
          throw new Error("something went wrong");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
