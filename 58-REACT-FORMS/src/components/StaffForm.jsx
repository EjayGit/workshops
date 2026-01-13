import { useState } from 'react';

export default function  StaffForm(){
    
    const [formValues, setFormValues] = useState({
        staffname: '',
        email: '',
        password: '',
    })
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    function handleInputChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    // function handleNameChange(e){
    //     setName(e.target.value);
    // }

    // function handleEmailChange(){
    //     setEmail(e.target.value);
    // }

    // function handlePasswordChange(){
    //     setPassword(e.target.value);
    // }

    function handleFormSubmit(e){
        e.preventDefault();
    }
    
    return(
        <>
            <h1>Staff Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="staffname">Name: </label>
                <input type="text" name='staffname' value={formValues.staffname} required onChange={handleInputChange}/>

                <label htmlFor="email">Email: </label>
                <input type="email" name='email' value={formValues.email} required onChange={handleInputChange}/>

                <label htmlFor="password">Password: </label>
                <input type="password" name='password' value={formValues.password} required onChange={handleInputChange}/>
                <button type='submit'>Submit</button>
            </form>
            <p>Name: {formValues.staffname}</p>
            <p>Email: {formValues.email}</p>
            <p>Password: {formValues.password}</p>
        </>
    )
}