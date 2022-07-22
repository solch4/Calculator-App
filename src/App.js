import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react'
import  { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('')

  const addInput = val => {
    setInput(input + val)
    if ((input + val).length > 17) {
      alert('Number limit reached.')
      setInput(input)
    }
  }
  const calculateResult = () => {
    if(input) setInput(evaluate(input))
    else alert('Please enter a value.')
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator-container">
        <Screen input={input} />
        <div className="fila">
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button clickHandler={calculateResult}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton clearHandler={() => setInput("")} />
        </div>
      </div>
      
      <footer>
        <p>
          App developed by
          <a
            id="linktree"
            href="https://linktr.ee/solch4"
            target="_blank"
            rel='noreferrer'
          >
            &nbsp;Solcito&nbsp;
          </a>
          (╯°□°）╯︵ ┻━┻
        </p>
      </footer>
    </div>
  );
}

export default App;
