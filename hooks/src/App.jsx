import { useState } from "react";
function App() {
  // let value = 5
  let [value, setValue] = useState(5);


  const increseValue = () => {

    if (value < 20) {
      setValue(value + 1);
    }
  }

  const decreseValue = () => {

    switch (value) {
      case 0:
        break;
      default:
        setValue(value - 1);
        break;
    }
    
  }

  return (
    <div>
      <span>totla value {value}</span>

      <h1>Counter World</h1>
      <h4>Counter : {value} </h4>

      <button onClick={
        increseValue
      }>Increse value</button>
      <br />
      <br />
      <button onClick={
        decreseValue
      }>Decrese value</button>

    </div>
  )
}

export default App
