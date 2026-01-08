import { useState } from 'react'
import './App.css'
import ListItems from './components/ListItems'
import Empty from './components/Empty'
import DataFromAPI from './components/dataFromAPI'

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h1>Conditional Rendering</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visible</button>
      {isVisible && <p>I am visible</p>}
      {isVisible ? <p>I am also visible</p> : <p>I am not visible</p>}
      <Empty/>
      <ListItems/>
    </>
  )
}

export default App
