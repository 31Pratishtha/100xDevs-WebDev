import { useEffect, useRef, useState } from 'react'

function App() {
	const [messages, setMessages] = useState(['Hii', 'hello'])

  const inputRef = useRef(null)
  const wsRef = useRef()

  const handleSend = () => {
    wsRef.current.send(JSON.stringify({
      type: 'chat', 
      payload: {
        message: inputRef.current.value
      }
    }))
  }

	useEffect(() => {
		const ws = new WebSocket('ws://localhost:8080')
		ws.onmessage = (ev) => {
			setMessages((prev) => [...prev, ev.data])
		}
    wsRef.current = ws

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'join', 
        payload: {
          roomId: '100'
        }
      }))
    }
	}, [])

	return (
		<>
			<div className='h-screen bg-gray-950'>
				<div className='h-[90%]'>
					{messages.map((msg) => (
						<div className='m-10'>
							<span className='bg-blue-50 p-4 rounded-md'>{msg}</span>
						</div>
					))}
				</div>
				<div className='flex gap-7 w-full'>
					<input
						type='text'
						className='p-4 text-white'
						placeholder='Send message'
            ref={inputRef}
					/>
					<button className='text-white bg-purple-400 p-4' onClick={handleSend}>
						Send
					</button>
				</div>
			</div>
		</>
	)
}

export default App
