import { useState } from "react";

const HowToAccessPrevValue = () =>{

    const [counter,setCounter] = useState(10);

    const buttonClick = () =>{
        /*
        ekhane jodi vabo je counter er value 1 -> 4 times add hoye total value 14 hobe counter er tahole ekdom e vul vabna.

        ekhane sob kota value ekta bundel er modhhe pathano hochhe backend a jekhane fiber,re-rendering konta kamon vabe access korbe tara thik korbe.

        ekhane ektai value bar bar add koreche bole backend a ektai operation run korche.
        mane 1 add ekbar e hobe, char bar hobe na.
        tar jonno value update hochhe na.Bolteo paro je ekhane previous value er access nei. 
        */

        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // console.log(counter);

        /* previous value access korte -> je function er sahaje amra value acees kori tar modhhe ekta callback use korte hoy and tar modhhe previous value access korte parbo  */

        setCounter ((prev)=>prev+1)
        setCounter ((prev)=>prev+1)
        setCounter ((prev)=>prev+1)
        setCounter ((prev)=>prev+1)

        // arekta syntax jeta same uporer motoi kaj korbe
        setCounter(prev => prev+1);

        console.log(counter);

    }

    return (
        <>
        <h1>How to access previous value</h1>
        <button onClick={buttonClick}>Click</button>
        </>
    );

}

export default HowToAccessPrevValue;