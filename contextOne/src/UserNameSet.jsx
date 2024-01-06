import userContext from "./Context/userContext";

import { useContext, useState} from "react";


const UserNameSet = () => {

    const [userName, setUserName] = useState("n/a");
    const [userAge, setUserAge] = useState("n/a");

    const { setUserDetails } = useContext(userContext);

    const buttonClicked = (e) => {
        e.preventDefault();
        setUserDetails({ userName, userAge });
    }


return (
    <>
        <input className="rounded-2xl outline-none pl-2 border-x-2 border-y-2 border-green-400" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
        <br />

        <input className="rounded-2xl outline-none pl-2 border-x-2 border-y-2 border-green-400" type="text" value={userAge} onChange={(e) => setUserAge(e.target.value)}></input>
        <br />

        <button onClick={buttonClicked}
            className="border-x-2 border-y-2 w-16 h-12 border-green-400 rounded-2xl hover:bg-blue-200"
        >Submit</button>
    </>

)

}

export default UserNameSet;