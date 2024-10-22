import { useState, useEffect } from "react";

function Timer() {
    
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        setInterval(() => {
            setTime(new Date())
        }, 1000);
})
    
    return (
        <>
        <p>{time.toLocaleTimeString()}</p>
        </>
     );
}

export default Timer;

