import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () =>{
    // const[data,setData] = useState([]);

    // useEffect(()=>{
    //     let url = `https://api.github.com/users/hiteshchoudhary`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then( res => setData(res))
    //     .catch( err => console.log(`Wrong fetch `,err))
    // },[data]);

    const data = useLoaderData();


    return (
        <>
            <h1>GitHub : {data.followers}</h1>
            <img src={data.avatar_url} alt="icon"></img>
        </>
    );
}

export default Github;

export const getEfficientValueFromApi = async () =>{
    const res = await fetch("https://api.github.com/users/hiteshchoudhary");
    return res.json();
}