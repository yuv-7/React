import { useState, useContext } from "react";
import UserContext from "../Context/userContext";



const User = () => {

    const [username, setUserName] = useState("");
    const [userage, setUserAge] = useState("");

    const { setUser } = useContext(UserContext);

    const buttonClicked = (e) => {
        e.preventDefault();
        setUser({ username, userage })
    }

    return (
        <div className="w-full h-72 bg-orange-300 text-slate-800 flex flex-col justify-center items-center text-2xl ">
            <h1 className="font-extrabold">Form</h1>
            <input type="text" className="border-x-2 border-y-2 border-red-600 m-3 rounded-2xl "
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input type="text" className="border-x-2 border-y-2 border-red-600 m-3 rounded-2xl "
                value={userage}
                onChange={(e) => setUserAge(e.target.value)}></input>
            <button type="submit" className="border-x-2 border-y-2 border-red-600 hover:bg-red-400 p-3 rounded-2xl"
                onClick={buttonClicked}
            >Submit</button>
        </div>
    )
}

export default User;