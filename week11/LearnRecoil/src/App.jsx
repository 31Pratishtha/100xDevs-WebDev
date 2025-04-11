import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter.js'

function App() {
	return (
		<>
			{/* <Counter /> */}

			<RecoilRoot>
				<Buttons />
				<Counter />
				<IsEven />
			</RecoilRoot>
		</>
	)
}

const Buttons = () => {
	const setCount = useSetRecoilState(counterAtom)
	return (
		<div>
			<button onClick={() => setCount((c) => c + 2)}>Increase</button>
			<button onClick={() => setCount((c) => c - 1)}>Decrease</button>
		</div>
	)
}

const Counter = () => {
	const count = useRecoilValue(counterAtom)
	return <>{count}</>
}

const IsEven = () => {
	const even = useRecoilValue(evenSelector)
	return <div>{even ? 'even' : 'odd'}</div>
}

// --------------------------------------------------------------------------

const Increase = () => {
	const setCount = useSetRecoilState(counterAtom)
	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
		</div>
	)
}

const Decrease = () => {
	const setCount = useSetRecoilState(counterAtom)
	return (
		<div>
			<button onClick={() => setCount((c) => c - 1)}>Decrease</button>
		</div>
	)
}

function CurrentCount() {
	const count = useRecoilValue(counterAtom)
	return <div>{count}</div>
}

// const Counter = () => {
// 	return (
// 		<>
// 			<CurrentCount />
// 			<Increase />
// 			<Decrease />
// 		</>
// 	)
// }

export default App
