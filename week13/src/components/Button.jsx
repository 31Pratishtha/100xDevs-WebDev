import React from 'react'

const Button = ({ disabled, children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`cursor-pointer text-white px-28 py-1 rounded-lg ${
				disabled ? 'bg-gray-light' : 'bg-green-light'
			}`}>
			{children}
		</button>
	)
}

export default Button
