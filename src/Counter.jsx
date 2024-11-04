import { useState } from "react"

export default  function Counter(){
    const [count, getCount] = useState(0)
     
    const counterHendle = () => {
        const newCount = count + 1;
        getCount(newCount)

    }
    
    return(
        <div style={{border:'1px solid purple'}}>
            <h2>Counter : {count}</h2>
            <button onClick={counterHendle}>Count </button>
        </div>
    )
}