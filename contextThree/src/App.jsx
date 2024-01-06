import { UserContextProvider } from "./Context/userContext";
import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {

  const [userName, setNewUserName] = useState("");
  const [userAge, setNewUserAge] = useState("");

  const setUserName = (newName) =>{
    setNewUserName(newName);
  }

  const setUserAge = (newAge) =>{
    setNewUserAge(newAge);
  }


  return (
    <UserContextProvider value={{userName,userAge,setUserName,setUserAge}}>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;