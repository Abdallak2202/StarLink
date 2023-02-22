import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    // ...add more providers here
  ],
  session: {
        jwt: true,
      },
      callbacks: {
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id
            
            return session;
          },
          async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.access_token}` );
              console.log(response);
              token.accessToken = account.access_token
              token.id = profile.id
            }
            return token
          }
      },
//       },
}

export default NextAuth(authOptions)
    
    // const options = {
    //   providers: [
    //     GoogleProvider({
    //       clientId: process.env.GOOGLE_CLIENT_ID,
    //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     }),
    //   ],
    //   session: {
    //     jwt: true,
    //   },
    //   callbacks: {
    //     session: async (session, user) => {
    //       session.jwt = user.jwt;
    //       session.id = user.id;
    //       return Promise.resolve(session);
    //     },
    //     jwt: async (token, user, account) => {
    //       const isSignIn = user ? true : false;
    //       if (isSignIn) {
    //         const response = await fetch(
    //           `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
    //         );
    //         const data = await response.json();
    //         token.jwt = data.jwt;
    //         token.id = data.user.id;
    //       }
    //       return Promise.resolve(token);
    //     },
    //   },
    // };
    
    // const Auth = (req, res) =>
    //   NextAuth(req, res, options);
    
    // export default Auth;