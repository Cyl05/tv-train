import React, { useState } from 'react';

const Counter = () => {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(prevState => prevState + 1);
    }

    const decrement = () => {
        setNum(prevState => prevState - 1);
    }

    const reset = () => {
        setNum(0);
    }

    const switchSigns = () => {
        setNum(prevState => prevState * -1);
    }

    return (
        <div style={{ width: '100%', height: '10vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1>{num}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={switchSigns}>Switch signs</button>
            </div>
        </div>
    )
}

export default Counter;