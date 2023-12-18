import { D1Adapter } from "@auth/d1-adapter";
import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

import { env } from "@/lib/env";
import { d1, db } from "@/lib/db";
import { cache } from "react";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: D1Adapter(d1),
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/login",
    newUser: "/dashboard",
  },
  providers: [
    GitHub({
      clientId: env.github_client_id,
      clientSecret: env.github_client_secret,
    }),
  ],
});

export const isAdmin = cache(async (): Promise<boolean> => {
  const session = await auth();
  console.log(session);
  if (!session || !session.user) return false;
  return (
    (await db
      .selectFrom("admins")
      .select("id")
      .where("id", "=", session.user.id)
      .executeTakeFirst()) !== undefined
  );
});
