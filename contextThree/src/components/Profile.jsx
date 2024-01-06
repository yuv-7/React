// import { useState } from "react";
import useUserDetails from "../Context/userContext";

const Profile = () =>{
    const {userName,userAge} = useUserDetails();

    return(
        <>
            <h1>User name : {userName}</h1>
            <h1>User Age : {userAge}</h1>
        </>
    )
}

export default Profile;