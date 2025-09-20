'use client'
import { Button } from "@repo/ui/Button"
import TextInput from "@repo/ui/TextInput"
import { useRouter } from "next/navigation"

const Home = () => {

  const router = useRouter()
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

       <TextInput placeholder="Enter something" />
       <Button onClick={() => router.push('/chat/123')}>
        <p>Join Room</p>
       </Button>
      </div>
    </div>
  )
}

export default Home