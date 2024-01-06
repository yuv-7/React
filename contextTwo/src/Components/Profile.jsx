import UserContext from "../Context/userContext";
import { useContext } from "react";


const Profile = () => {
    const {user} = useContext(UserContext);
    console.log(user.username);
    return (
        <div className="w-full h-72 bg-cyan-500 text-cyan-900 flex justify-center items-center text-5xl ">
            <h1 className="font-extrabold">UserName : {user.username} ,</h1>
            <h1 className="font-extrabold"> UserAge : {user.userage}</h1>
        </div>
    )
}

export default Profile;