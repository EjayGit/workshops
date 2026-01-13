import {useState} from 'react'

export default function FormValues(){

    const [formValues, setFormValues] = useState({
        name: "",
        email: ""
    });

    function inputChange(e){
        setFormValues({
            ...FormValues,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("The form values are", formValues);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={formValues.name} onChange={inputChange}/>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={formValues.email} onChange={inputChange}/>
            <button type="submit">Submit</button>
            <p>Current value is: {formValues.name}</p>
            <p>Current value is: {formValues.email}</p>
        </form>
    )
}