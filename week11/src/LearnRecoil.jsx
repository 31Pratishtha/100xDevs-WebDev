import React, { useState } from 'react'

const Increase = ({ setCount }) => {
	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
		</div>
	)
}

const Decrease = ({ setCount }) => {
	return (
		<div>
			<button onClick={() => setCount((c) => c - 1)}>Decrease</button>
		</div>
	)
}

const CurrentCount = ({count}) => {
	return (
		<div>
			{count}
		</div>
	)
}

const LearnRecoil = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<CurrentCount count={count}/>
			<Increase setCount={setCount} />
			<Decrease setCount={setCount} />
		</>
	)
}

export default LearnRecoil
