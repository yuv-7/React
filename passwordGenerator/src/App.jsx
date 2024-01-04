import './App.css';
import { useState, useCallback, useEffect, useRef } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowe, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let collection = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    let numbers = "1234567890";
    let characters = "[]{}$#%@!^&*/+-`~";
    let pass = '';

    if (numberAllowe) collection += numbers;
    if (characterAllow) collection += characters;

    for (let i = 1; i <= length; i++) {
      let randomindex = Math.floor((Math.random() * collection.length) + 1);
      pass += collection.charAt(randomindex);
      // console.log(randomindex);
    }

    setPassword(pass);
    // console.log(pass);
  }, [length, numberAllowe, characterAllow, setPassword]);

  /* this section we copy the password and past it into the next tab
  ===================================================================
  */

  const copyToClipBoardInNextTab = useCallback((e) => {
    e.preventDefault();

    // now we use to select useRef to edit reference area
    // using select() method we highlight the area where we select the data
    passwordRef.current?.select();
    // we highlist the data in a range
    passwordRef.current?.setSelectionRange(0,5);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordRef = useRef(null);

  /* useEffect() use in this section
   ===================================
  */

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowe, characterAllow, generatePassword]);

  return (
    <div className="wrapper">
      <form>

        <div className='search-section'>
          <input type='text' ref={passwordRef} readOnly value={password}></input>
          <button onClick={copyToClipBoardInNextTab}>Click</button>
        </div>

        <div className='select-section'>

          <div className="input-section">
            <input type="range" value={length} onChange={(e) => setLength(e.target.value)} ></input>
            <label>Length {length}</label>
          </div>

          <div className="input-section">
            <input id='check' type="checkbox" onChange={
              () => {
                setNumberAllow((prev) => !prev)
              }
            } ></input>
            <label>Number</label>
          </div>

          <div className="input-section">
            <input id='check' type="checkbox" onChange={() => setCharacterAllow((prev) => !prev)}></input>
            <label>Character</label>
          </div>

        </div>

      </form>
    </div>
  )
}

export default App