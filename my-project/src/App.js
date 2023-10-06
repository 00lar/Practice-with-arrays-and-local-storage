import React from 'react';
import './App.css';
import { useState } from 'react';

const useCounter = () => {
  const [Counter,setCounter] = useState(0);
  const Add = () => {setCounter(Counter+1);} 
  const Substract = () => {setCounter(Counter-1);}
  const Reset = () => {setCounter(0)};
  return {
    Counter,
    Add,
    Substract,
    Reset
  }
}

function App() {
  const CounterA = useCounter();
  const CounterB = useCounter()
  return (
    <div className="App">
      <div>
        <p>{CounterA.Counter}</p>
        <button
        onClick={CounterA.Add}>+</button>
        <button
        onClick={CounterA.Substract}
        >-</button>
        <button
        onClick={CounterA.Reset}>Reset</button>
      </div>
      <div>
        <p>{CounterB.Counter}</p>
        <button
        onClick={CounterB.Add}>+</button>
        <button
        onClick={CounterB.Substract}
        >-</button>
        <button
        onClick={CounterB.Reset}>Reset</button>
      </div>
    
    </div>

  );
}

export default App;
