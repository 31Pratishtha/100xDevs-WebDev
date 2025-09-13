import axios from 'axios'
import React from 'react'

const Profile = async () => {
	// useEffect to send api

	const res = await axios.get('http://loaclhost:3000/api/profile', {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	})

	const profilePic = res.data.avatarUrl
  
	return (
		<>
			<div>{profilePic}</div>
		</>
	)
}

export default Profile
