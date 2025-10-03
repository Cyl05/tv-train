// import React from 'react'

import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";
import { type AppDispatch, type RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementAsync(10))}>Increment by 10</button>
            </div>
        </div>
    )
}

export default Counter