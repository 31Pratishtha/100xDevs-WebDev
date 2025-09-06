import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

async function createUser() {
	const user = await client.user.findFirst({
		where: {
      id: 1
    }
	})
	// const user = await client.user.create({
	// 	data: {
	// 		username: 'prat',
	// 		password: 'abcdabcd',
	// 		age: 5,
	// 		city: 'hyd',
	// 	},
	// })

  console.log(user)
}

createUser()
