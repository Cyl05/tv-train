import React, { useState, useEffect, useContext, useRef, useMemo } from 'react';
import Greeting from '../components/Greeting.jsx';
import UserCard from '../components/UserCard.jsx';
import { NameContext } from '../components/NameContext.jsx';

const ComponentsAndProps = () => {
    const [counter, setCounter] = useState(0);
    const [apiRes, setApiRes] = useState();
    const [facNum, setFacNum] = useState(0);
    const { name, toggleName } = useContext(NameContext);
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }
    
    function handleClick() {
        setCounter((prevState) => (prevState + 1));
    }

    const factorial = (n) => {
        let prod = 1;
        for (let i = 1; i <= n; i++) {
            prod *= i;
        }

        return prod;
    }

    useEffect(() => {
        async function fetchFromAPI() {
            const response = await fetch('https://randomfox.ca/floof/');
            const responseJSON = await response.json();

            setApiRes(responseJSON.image);
            console.log(responseJSON);
        }
        fetchFromAPI();
    }, []);

    useEffect(() => {
        console.log(facNum);
    }, [facNum]);

    const memoFactorial = useMemo(() => factorial(facNum), [facNum]);

    return (
        <>
            <h3>Functional Component</h3>
            <Greeting />

            <hr />

            <h3>Props</h3>
            <UserCard name={"Chiraag"} age={20} />

            <hr />

            <h3>useState</h3>
            <p>Counter: {counter}</p>
            <button onClick={handleClick}>Increment</button>
            
            <hr />

            <h3>useEffect</h3>
            <p>Fetches from API on page load</p>
            {apiRes && <img src={apiRes} />}

            {/* useReducer */}

            <h3>useContext</h3>
            <p>{name}</p><br />
            <button onClick={toggleName}>Toggle Name</button>

            <hr />

            <h3>useRef</h3>
            <p>this ref focuses on input element on click of a button</p>
            <input ref={inputRef} type='text' />
            <button onClick={focusInput}>Focus input</button>

            <hr />

            <h3>useMemo</h3>
            <p>stores expensive factorial output</p>
            <input type="number" value={facNum} onChange={(e) => setFacNum(e.target.value)} />
            <p>{memoFactorial}</p>
        </>
    )
}

export default ComponentsAndProps;