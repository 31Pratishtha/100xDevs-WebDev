'use client'
import axios from 'axios'
import React from 'react'

const Signin = () => {
  return (
    <>
    <div>Signin</div>
    <input type="text" />
    <input type="text" />
    <button onClick={async () => {
      const res = await axios.post('http://localhost:3000/api/signin', {
        username: 'abcd', 
        password: 'abcd'
      })

      localStorage.setItem('token', res.data.token)

    }}>SignIn</button>
    </>
    
  )
}

export default Signin