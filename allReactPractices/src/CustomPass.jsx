import './CustomPass.css';

import { useState, useCallback, useEffect, useRef } from 'react';

const CustomPass = () => {

    const [length,setLength] = useState(8);
    const [numberAllow,setNumberAllow] = useState(false);
    const [characterAllow,setCharacterAllow] = useState(false);
    const [password,setPassword] = useState("");


    const buttonClick = useCallback((e)=>{
        e.preventDefault();
        passwordReference.current?.select()
        // passwordReference.current?.setSelectionRange(0,6);
        window.navigator.clipboard.writeText(password);
    },[password]);

    const passwordGenerator = useCallback(()=>{
        let options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
        let numbers = "1234567890";
        let characters = "+-*/@!#~`%^$&*(){}[]?";
        let pass = "";

        if(numberAllow) options +=numbers
        if(characterAllow) options +=characters

        for (let i = 0; i <length; i++) {
            let customIndex = Math.floor(Math.random() * options.length + 1)
            pass += options.charAt(customIndex);
        }

        setPassword(pass);

    },[length,numberAllow,characterAllow,setPassword]);

    useEffect(()=>{
        passwordGenerator();
    },[passwordGenerator,length,numberAllow,characterAllow])

    const passwordReference = useRef(null);

    return (
        <div className="wrapper">
            <form>

                <div className='search-section'>
                    <input type='text' readOnly value={password} ref={passwordReference}></input>
                    <button onClick={buttonClick} >Click</button>
                </div>

                <div className='select-section'>

                    <div className="input-section">
                        <input type="range" value={length} onChange={(e)=>setLength(e.target.value)}></input>
                        <label>Length {length}</label>
                    </div>

                    <div className="input-section">
                        <input id='check' type="checkbox" onChange={()=>setNumberAllow((prev)=>!prev)}></input>
                        <label>Number</label>
                    </div>

                    <div className="input-section">
                        <input id='check' type="checkbox" onChange={()=>setCharacterAllow((prev)=>!prev)}></input>
                        <label>Character</label>
                    </div>

                </div>

            </form>
        </div>
    );
}

export default CustomPass;