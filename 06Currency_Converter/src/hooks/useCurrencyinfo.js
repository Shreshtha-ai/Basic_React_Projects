import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({})  // here initialize state
    useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // here setData is used to store the API response in res[currency]
    }, [currency])   // here currency change so useEffect run, it is a dependency array
    console.log(data)                 
    
    return data                            // here return data
}  

export default useCurrencyInfo;             // now we can use this hook in any component