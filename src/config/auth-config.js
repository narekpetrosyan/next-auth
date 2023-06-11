import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

/** @type {import('next-auth').AuthOptions} */
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const currentUser = {
          email: credentials.email,
          password: credentials.password,
        };

        return {
          id: "1",
          name: "narek",
          email: credentials.email,
          image: null,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
