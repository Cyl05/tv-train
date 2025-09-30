import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 data-testid="count">{count}</h1>
            <button data-testid="increment" onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button data-testid="decrement" onClick={() => setCount((c) => c - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;