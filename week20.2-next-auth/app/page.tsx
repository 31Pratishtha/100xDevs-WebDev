'use client'
import { getServerSession } from 'next-auth'
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react'

export default async function Home() {
	// return (
	//   <SessionProvider>
	//     <RealHome />
	//   </SessionProvider>
	// );

	const session = await getServerSession()

	return <div>{JSON.stringify(session)}</div>
}

function RealHome() {
	// const session = useSession()
	// return (
	//   <div>
	//     {session.status === 'authenticated' && <button onClick={() => signOut()}>Logout</button>}
	//     {session.status === 'unauthenticated' && <button onClick={() => signIn()}>SignIn</button>}
	//     {JSON.stringify(session)}
	//   </div>
	// )
}
