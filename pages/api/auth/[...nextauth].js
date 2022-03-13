import NextAuth from 'next-auth'
// dbConnect
import dbConnect from './../../../lib/dbConnect'
// Providers
import GoogleProvider from 'next-auth/providers/google'
// Model
import User from './../../../models/User'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await dbConnect()
      const checkUser = await User.findOne({
        email: user.email,
      })
      if (checkUser) {
        return true // user db
      } else {
        await User.create(user)
        return true
      }
    },
  },
})
