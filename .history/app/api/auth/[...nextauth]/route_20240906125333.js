import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authoptions =  NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ],
 
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    const isAllowedToSignIn = true
    if (isAllowedToSignIn) {
      return true
    } else {
      // Return false to display a default error message
      return false
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    }
  }
}

})

export {authoptions as GET, authoptions as POST}
