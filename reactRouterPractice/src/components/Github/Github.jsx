import { useEffect, useState } from "react";


const Github = () =>{
    const[data,setData] = useState([]);

    useEffect(()=>{
        let url = `https://api.github.com/users/hiteshchoudhary`
        fetch(url)
        .then(res => res.json())
        .then( res => setData(res))
        .catch( err => console.log(`Wrong fetch `,err))
    },[data]);

    return (
        <>
            <h1>GitHub : {data.followers}</h1>
            <img src={data.avatar_url} alt="icon"></img>
        </>
    );
}

export default Github;