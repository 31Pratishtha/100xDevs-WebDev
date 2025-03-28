import { useState } from 'react'
import './App.css'
import { usePostTitle, useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'
import { useDebounce } from './hooks/useDebounce'

function App() {
	const [state, setState] = useState(0)
  const prev = usePrev(state)
	const postTitle = usePostTitle()
	const { data, loading } = useFetch(
		'https://jsonplaceholder.typicode.com/todos/2'
	)
	console.log(data)

	function sendDataToBackend(){
		console.log("hiii")
		fetch('https://jsonplaceholder.typicode.com/todos/3')
	}

	const debounceFn = useDebounce(sendDataToBackend)

	if (loading) {
		return <>loading...</>
	}
	return (
		<>
			<div>
				{postTitle}
				{data.title}
			</div>
			<div>
        <button onClick={() => {setState(c => c + 1)}}>Count {prev}</button>
      </div>
			<input type="text" onChange={debounceFn} />
		</>
	)
}

export default App
