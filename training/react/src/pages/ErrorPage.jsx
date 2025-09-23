import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBounday';

const ErrorPage = () => {
    const [fruitsList, setFruitsList] = useState([]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const fruits = ["apple", "banana", "mango", "cherry", "pomegranata", "grapes"];

    function handleSubmit(e) {
        e.preventDefault();
        inputRef.current.focus();
        const matchingFruit = fruits.filter((fruit) => fruit === input)[0];
        if (matchingFruit) {
            setFruitsList((prevState) => [...prevState, matchingFruit]);
        } else {
            throw new Error("Not a fruit!");
        }
        setInput('');
    }

    useEffect(() => {
        console.log(fruitsList);
    }, [fruitsList]);

    return (
        <ErrorBoundary>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'input'}>Enter fruit name: </label><br />
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} name="input" id='input' ref={inputRef} />
                {" "}
                <input type='submit' />
            </form>
        </ErrorBoundary>
    )
}

export default ErrorPage;