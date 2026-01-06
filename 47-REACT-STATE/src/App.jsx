import { useState } from 'react';
import ButtonWithState from './components/ButtonWithState';
import ButtonWithStateMinus from './components/ButtonWithStateMinus';
import ButtonWithProps from './components/ButtonWithProps';
import ButtonWithPropsMinus from './components/ButtonWithPropsMinus';
import ButtonWithPropsZero from './components/ButtonWithPropsZero';
import './App.css';

function App() {
  const [num, setNum] = useState(0)
  
  return (
    <>
    <h1>State with components</h1>
    <h2>Buttons with their own state</h2>
    <ButtonWithState/>
    <ButtonWithState/>
    <ButtonWithStateMinus/>

    <h2>Buttons with props</h2>
    <ButtonWithProps num={num} setNum={setNum}/>
    <ButtonWithProps num={num} setNum={setNum}/>
    <ButtonWithPropsMinus num={num} setNum={setNum}/>
    <ButtonWithPropsZero num={num} setNum={setNum}/>
    </>
  )
}

export default App
