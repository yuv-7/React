import userContext from "./Context/userContext";

import { useContext } from "react";

const UserNameSet = () =>{

    const {userdetails} = useContext(userContext);

    return (
        <>
        <h1>User name is : {userdetails.userName}</h1>
        <h1>User age is : {userdetails.userAge}</h1>
</>
    )

}

export default UserNameSet;