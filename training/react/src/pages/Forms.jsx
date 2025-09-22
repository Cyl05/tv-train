import React, { useEffect, useState } from 'react';

const Forms = () => {
    const [controlled, setControlled] = useState({
        name: "",
        password: "",
    });
    const [query, setQuery] = useState('');
    const [validation, setValidation] = useState({
        name: "",
        password: "",
        error: "",
    });

    const handleChange = (e) => {
        setControlled((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleChangeValidation = (e) => {
        setValidation((prev) => ({...prev, [e.target.name]: e.target.value}));
        if (e.target.name === 'password' && (e.target.value.length < 8 && e.target.value.length !== 0)) {
            setValidation((prev) => ({...prev, error: "Password must be longer than 8 characters"}));
        } else {
            setValidation((prev) => ({...prev, error: ""}));
        }
    }

    const handleSubmit = (formData) => {
        alert(`Found no matches for query '${formData.get('query')}'`);
    }

    return (
        <>
            <h3>Controlled Components:</h3>
            <label htmlFor="nameControlled">Name: </label>
            <input type='text' id='nameControlled' name='name' value={controlled.name} onChange={handleChange} /><br />
            <label htmlFor="passwordControlled">Password: </label>
            <input type='password' id='passwordControlled' name='password' value={controlled.password} onChange={handleChange} />

            <h3>Uncontrolled Components:</h3>
            <label htmlFor="nameUncontrolled">Name: </label>
            <input type='text' id='nameUncontrolled' name='name'/><br />
            <label htmlFor="password">Password: </label>
            <input type='password' id='passwordUncontrolled' name='password'/>

            <hr />

            <h3>Forms and Forms Submit</h3>
            <form action={handleSubmit}>
                <input type='text' name='query' onChange={(e) => setQuery(e.target.value)} value={query} />
                <input type='submit' value='Search' />
            </form>

            <hr />

            <h3>Form Validation:</h3>
            <label htmlFor="name">Name: </label>
            <input type='text' id='name' name='name' value={validation.name} onChange={handleChangeValidation} /><br />
            <label htmlFor="password">Password: </label>
            <input type='password' id='password' name='password' value={validation.password} onChange={handleChangeValidation} />            
            <p style={{ color: 'red' }}>{validation.error}</p>
        </>
    )
}

export default Forms;