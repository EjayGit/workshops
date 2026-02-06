// animatin on hover
// RAED the data from rollercoasters (database, lib, external API...)

"use client";
import {useEffect} from 'react';

export default function RollercoastersList(){
    // I cannot use sql directly here as this would be a serverside function.
    const [rollercoasters, setRollercoasters] = useState([]);
    useEffect((=>{
        const response = fetch("http://localhost:3000/api/rollercoasters");
        const data = response.json();
    }
    getRollercoasters()
));
    
    return(
        <>
            <h1>List of Rollercoasters</h1>
        </>
    )
}