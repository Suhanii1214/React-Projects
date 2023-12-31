import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count+1)
  }

  function decreaseCount() {
    setCount(count-1)
  }

  return (
    <>
       <h1>{count}</h1>
       <button onClick={decreaseCount}>-</button>
       <button onClick={increaseCount}>+</button>
    </>
  )
}

export default App
