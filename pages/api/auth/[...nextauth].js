import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.nutrition.read https://www.googleapis.com/auth/calendar",
    }),
    // ...add more providers here
  ],
  jwt: {
    encryption: true,
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      console.log({ account });
      console.log({ token });

      if (account?.accessToken) {
        token.accessToken = account.access_token;
      }

      if (token?.account) {
        console.log({ at: token.account["access_token"] });
        token.accessToken = token.account["access_token"];
      }

      return token;
    },
  },
});
