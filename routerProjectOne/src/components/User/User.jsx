import { useParams } from "react-router-dom";

const User = () =>{
    const {userName} = useParams();

    return (
        <div className="w-full h-max bg-blue-400 text-blue-950 p-4">
            <h1 className="">UserName : {userName} </h1>
        </div>
    );

}

export default User;

