import { useState } from "react";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { useEffect } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";

const App = () => {

  const [themeColor,setThemeColor] = useState('light');

  const setLightTheme = () =>{
    setThemeColor("light");
  }

  const setDarkTheme = () =>{
    setThemeColor("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('body').classList.add(themeColor)
  },[themeColor])

  return (
    <ThemeContextProvider value={{themeColor,setLightTheme,setDarkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>

  );
}

export default App;