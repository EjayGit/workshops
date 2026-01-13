import { useState } from 'react'

export default function Form(){
    const [name, setName] = useState('');
    
    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' name='name' value={name} onChange={handleChange}/>
            <p>Current value of input is: {name}</p>
            <button type='submit'>Submit</button>
        </form>
    );
}