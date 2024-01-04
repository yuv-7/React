import { useState } from "react";
import "./App.css";

export default function App() {

  const [color, setColor] = useState("rgb(228, 228, 156)");
  
  const [intervalAction,setIntervalAction] = useState('');

  const startColorChanger =()=>{
    const setIntervalColor = () =>{
      const minValue = 0;
      const maxValue = 255;

      let randomOne = Math.round(Math.random() * ((maxValue - minValue))) + minValue;
      let randomTwo = Math.round(Math.random() * ((maxValue - minValue))) + minValue;
      let randomThree = Math.round(Math.random() * ((maxValue - minValue))) + minValue;

      setColor(`rgb(${randomOne},${randomTwo},${randomThree}`);
      console.log(randomOne, randomTwo, randomThree);
    }

    const a = setInterval(setIntervalColor, 1000);
    setIntervalAction(a);

  }

  const stopColorChanger = () =>{
    clearInterval(intervalAction)
  }

  const restartColor = () =>{
    setColor("rgb(228, 228, 156)")
  }

  return (
    <div className="w-full h-screen bgcolor" style={{ backgroundColor: color }}>

      <div id="section">
        <button onClick={startColorChanger}>Start</button>
        <button onClick={stopColorChanger}>Stop</button>
        <button onClick={restartColor}>Restart</button>
      </div>

    </div>
  );
}