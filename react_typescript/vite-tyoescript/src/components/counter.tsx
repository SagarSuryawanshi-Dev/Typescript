import { useState } from "react";

export function Counter () {
    const [count, setcount] = useState<number>(0)
return(

    <div>
        <h3>Counter: {count} </h3>
        <button onClick={()=> setcount((count)=> count+1)}> Increment </button>
    </div>
    
)
}