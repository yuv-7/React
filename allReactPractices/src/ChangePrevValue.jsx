import { useState } from "react";

const ChangePrevValue = () => {

    const [startTime,setStartTime] = useState(false);
    const [endTime,setEndTime] = useState(false);

    console.log(`StartTime : `,startTime);
    console.log(`EndTime : `,endTime);


    return (
        <div>
            <button onClick={()=>setStartTime((prev)=>!prev)}>start-time</button>
            <button onClick={()=>setEndTime((prev)=>!prev)}>end-time</button>
        </div>
    );
}

export default ChangePrevValue;