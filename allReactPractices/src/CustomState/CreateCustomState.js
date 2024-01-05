import {useState,useEffect} from "react";

const useCurrencyInfo = (currency) =>{

    const {data,setData} = useState({});

    useEffect(()=>{
        // hold api link in a variable
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        // using fetch to retrieve currency
        fetch(url)
        // convert currency into object if currency retrive correctly
        .then((res)=> res.json())
        // we store currency data in a state variable
        .then((res)=> setData(res[currency]))

        return data;

    },[currency,data,setData]);

}

export default useCurrencyInfo;