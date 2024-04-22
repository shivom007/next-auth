import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      }),
      Credentials({
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials, req) {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
  
          console.log(email, password);
          if (email && password) {
            return {
              id: "hello",
              password: password,
            };
          }
  
          return null;
        },
      }),
      GitHub({
        clientId: process.env.AUTH_GITHUB_ID!,
        clientSecret: process.env.AUTH_GITHUB_SECRET!,
      }),
],
  pages: {
    signIn : '/login',
  }
})