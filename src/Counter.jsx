import { useState } from "react"

export default function Counter() {
    const [count,setCount] = useState(0);
    function increaseCounter (){
        setCount(count + 1)
      
    }
    function decreaseCounter() {
        const newCount= count-1
        setCount(newCount)
      
    }
    return (
        <div style={{border:"2px solid blue",borderRadius:'20px', padding:"20px"}}>
            <h2>Counter: {count}</h2>
            <button onClick={increaseCounter}>increase</button>
            <button onClick={decreaseCounter}>decrease</button>

        </div>
    )
}