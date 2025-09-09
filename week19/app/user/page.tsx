import axios from 'axios'

export default async function User() {
	const res = await axios.get(
		// 'https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details'
		'http://localhost:3000/api/v1/user/details'
	)

	const data = res.data

	return (
		<>
			<div>
				User:
				{data.name}
				{data.email}
			</div>
		</>
	)
}
