import {useContext,createContext} from 'react';

export const ThemeContext = createContext({
    themeColor:"light",
    setLightTheme:()=>{},
    setDarkTheme:()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}