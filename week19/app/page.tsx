import Image from 'next/image'
import Link from 'next/link'
import { PrismaClient } from './generated/prisma'


const prismaClient = new PrismaClient()

export default function Home() {
	return (
		<>
			<div className='text-lg w-screen h-screen flex justify-center items-center'>
				<div>
					Todo Application
					<br />
					<Link href={'/signin'} className='text-md border-2 m-2'>Sign in to Todo App</Link>
					<br />
					<Link href={'/signup'} className='text-md border-2 m-2'>Sign up to Todo App</Link>
				</div>
			</div>
		</>
	)
}
