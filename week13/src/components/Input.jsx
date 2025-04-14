import React from 'react'

const Input = ({onClick, type, placeholder}) => {
  return (
		<input 
			onClick={onClick}
      type={type}
      placeholder={placeholder}
      className={'text-white px-3 w-72 py-1 rounded-lg bg-blue-light'}
		/>	
	)
}

export default Input