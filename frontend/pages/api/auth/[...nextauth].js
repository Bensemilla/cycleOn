import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );
        const data = await response.json();

        if (data.user) {
          return data.user;
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
