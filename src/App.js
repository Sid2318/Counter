import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [count, setCount] = useState(0)

let click1 = (e)=> {
  setCount(count + 1)
}

let click2 = (e)=> {
  setCount(count - 1)
}
let reload =(e) => {
  window.location.reload()
}

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="count-block">{count}</div>
      <div>
        <button onClick = {click1} onChange={(e) => setCount(e.target.value)} >+</button>
        <button onClick = {click2} onChange={(e) => setCount(e.target.value)} >-</button>
      </div>
      <button onClick = {reload}> ↻ </button>
    </div>
  );
}

export default App;
