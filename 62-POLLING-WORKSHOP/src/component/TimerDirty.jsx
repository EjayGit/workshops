import {useEffect, useState} from 'react'

export default function TimerDirty(){
    console.log("TimerDirty component reader");
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("TimerDirty component useEffect callback");
        setInterval(() => {
            setCount((currentCount) => currentCount + 1);
        }, 1000);
    }, []);

    return <div>Count: {count}</div>;
}