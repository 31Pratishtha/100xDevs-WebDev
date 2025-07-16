import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState()
  const inputRef = useRef()

  function sendMessage(){
    if(!socket) return

    const message = inputRef.current.value

    //@ts-ignore
    socket.send(message)
  }

  //Connect to ws server
  useEffect(() => {
   const ws = new WebSocket('ws://localhost:8080')
   setSocket(ws)
   
   ws.onmessage = (ev) => {
    alert(ev.data)
   }
  }, [])


  return (
    <>
      <input type='text' ref={inputRef} placeholder='Message'></input>
      <button onClick={sendMessage}>Send Message</button>
    </>
  )
}

export default App
