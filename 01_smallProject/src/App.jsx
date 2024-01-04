import './App.css';
import { useState } from 'react';

function App() {
  // let value = 5;
  let [value, setValue] = useState(0);

  const addValue = () => {
    switch (value) {
      case 20:
        break;
      default:
        value = value + 1;
        setValue(value);
        break;
    }

  }

  const removeValue = () => {
    switch (value) {
      case 0:
        break;
      default:
        value = value - 1;
        setValue(value);
        break;
    }

  }

  return (
    <div className="bg-yellow-100 w-96 h-20">
      <h1 className='text-cyan-500 w-96 text-center mb-2'>Value : {value}</h1>
      <button id="add" onClick={addValue}>Add Value</button>

      <button id="remove" onClick={removeValue}>Remove Value</button>
    </div>
  )
}

export default App