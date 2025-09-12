'use client'
import { useState } from "react"

export default function Good () {
  const [count, setCount] = useState(0)
  return (
    <div>
      Hello
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}