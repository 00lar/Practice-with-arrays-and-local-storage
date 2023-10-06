import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [Counter,setCounter] = useState(0);

  const Add = () => {
    setCounter(Counter+1);
  }

  const Substract = () => {
    setCounter(Counter-1);
  }

  const Reset = () => {
    setCounter(0);
  }

  return (
    <div className="App">
    <p>{Counter}</p>
      <button
      onClick={Add}>+</button>
      <button
      onClick={Substract}
      >-</button>
      <button
      onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
