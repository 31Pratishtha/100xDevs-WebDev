import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Login with email',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'Prats' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const username = credentials?.username
				const password = credentials?.password

				const user = { id: '1', name: 'Pratz', email: 'pratz@example.com' }

				if (user) {
					return user
				} else {
					return null
				}
			},

		}),

		GoogleProvider({
			clientId: 'abcd',
			clientSecret: 'abcdabcd',
		}),
	],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
