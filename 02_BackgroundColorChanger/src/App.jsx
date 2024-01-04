import { useState } from "react";
import './App.css';
export default function App() {

  const [color, setColor] = useState("rgb(228, 228, 156)");
  return (
    <div className="w-full h-screen bgcolor" style={{ backgroundColor: color }}>

      <div id="section">
        <button id="red" onClick={
          () => setColor("rgb(255, 67, 67)")
        }>Red</button>

        <button id="yellow" onClick={
          () => setColor("rgb(255, 251, 0)")
        }>Yellow</button>

        <button id="blue" onClick={
          () => setColor("rgb(108, 67, 255)")
        }>Blue</button>

        <button id="pink" onClick={
          () => setColor("rgb(252, 155, 234)")
        }>Pink</button>

        <button id="violet" onClick={
          () => setColor("rgb(162, 0, 255)")
        }>Violet</button>

        <button id="azure" onClick={
          () => setColor("rgb(109, 242, 220)")
        }>Azure</button>
      </div>

    </div>
  );
}