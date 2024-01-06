import { useState } from "react";
import useTheme from "../Context/ThemeContext";
import { useEffect } from "react";

export default function ThemeBtn() {
   
    const {setLightTheme, setDarkTheme} = useTheme()
    const [check,setCheck] = useState(false)

    const clickButton= (e) =>{
        e.preventDefault();
        setCheck((prev)=>!prev)
    }

    useEffect(()=>{
        if (check) {
            setDarkTheme()
        } else {
            setLightTheme()
        }
    },[check,setDarkTheme,setLightTheme]);

    return (
        <label className="relative inline-flex items-center cursor-pointer">

            <button className="border-x-2 border-y-2 border-slate-900 p-2 rounded-2xl" onClick={clickButton}>Click</button>

            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );

}