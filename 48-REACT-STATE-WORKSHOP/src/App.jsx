import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incrementCounter(){
    setCount(count + 1);
  }
  function decrementCounter(){
    setCount(count - 1);
  }
  function resetCounter(){
    setCount(0);
  }

  return (
    <>
      <p onClick={resetCounter}>{count} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={decrementCounter}>Get another cookie</button>
    </>
  )
}

export default App
