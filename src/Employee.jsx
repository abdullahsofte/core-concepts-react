import { useState } from "react"

export default function Employee(){
    
    const [count, setCount]  = useState(50)


    const addCountHendle = () => {
        const newCount = count + 1
        setCount(newCount);
    }

    const removeEmployeeHendle = () => {
        const newCount = count - 1
        setCount(newCount)
    }
    return(
        <>
        <h1>Count Employee : {count} </h1>
        <button onClick={addCountHendle}>Add</button>
        <button onClick={removeEmployeeHendle}>Remove</button>
        </>
    )
}