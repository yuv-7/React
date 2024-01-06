import {useContext , createContext} from 'react';

const userContext = createContext({
    userName : "",
    userAge : "",
    setUserName : () =>{},
    setUserAge : () =>{}
})

export const UserContextProvider = userContext.Provider;

const useUserDetails = () =>{
    return useContext(useContext);
}

export default useUserDetails;