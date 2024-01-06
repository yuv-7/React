import userContext from "./Context/userContext";
import { useState } from "react";
import UserNameSet from "./UserNameSet";
import UserDisplayName from "./UserDisplayName";
const App = () =>{

  const [userdetails,setUserDetails] = useState("n/a");

  return (
    <userContext.Provider value={{userdetails,setUserDetails}} >


      <h1 className="w-full bg-cyan-200 text-5xl text-cyan-900 p-4">Use Context with Pashion</h1>

      <UserNameSet />
      <UserDisplayName />

    </userContext.Provider>
  );
}

export default App;