
import { useParams } from "react-router-dom";

const User = () =>{

    const {username} = useParams();
    return ( 
        <div>
            <h1 className="bg-teal-400 text-orange-700 text-center w-screen h-28 p-7 text-5xl">User Name : {username} </h1>
        </div>
    );
}

export default User;