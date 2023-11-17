import { useEffect, useState } from "react";


export default function CountButtonBy5() {
    let [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 5);
    }
    function rollOverCount(){
        if(count > 10){
            setCount(0)
        }
    }
   
    useEffect(rollOverCount, [count])
    return <div>
        <button onClick={handleClick}>+5</button>
        <div>{count}</div>
    </div>;
}

