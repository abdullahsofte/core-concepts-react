import { useState } from "react"

export default function Number(){
    const [count, setCounter] = useState(0)
    
    const countHendle = () => {
        const newCount = count + 1;
         setCounter(newCount);
    }

    const reduseHendle = () => {
        const newCount = count -1;
        setCounter(newCount);
    }
    
    return(
        <>
        <h1>Countr 2 : {count} </h1>
         <button onClick={countHendle}>Add</button>
         <button onClick={reduseHendle}>Remove</button>
        </>
    )
}