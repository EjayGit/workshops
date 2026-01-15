// TODO: I want to change the randome image of a fox at specific time intervals.
// polling - refresh our content
// state - store our image url value ✅
// effect - fetch data from external API
// timer - refresh periodically

import { useState, useEffect } from "react";

export default function FoxImage(){
    
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        function fetchFox(){
            const response = fetch("https://randomfox.ca/floof/");
            const data = response.json();
            setImgUrl(data.images);
        }
        //fetchFox();

        // interval to poll data regularly
        // timers are effects so is inside the useEffect function. It is like fetch.

        const pollingInterval = setInterval(fetchFox, 5000); // remember to clear the interval so stacking does not occur.
        return () => clearInterval(pollingInterval);

    }, [])

    return(
        <>
            <h2>Fox Image</h2>
        </>
    )
}