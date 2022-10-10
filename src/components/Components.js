import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/counterActions';

const Components = () => {


    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const incrementCount = () => {
        dispatch(incrementCounter())
    }
    const decrementCount = () => {
        dispatch(decrementCounter())
    }

    const resetHandle = () => {
        dispatch(resetCounter())
    }

    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetHandle}>Reset</button>
        </div>
    );
};

export default Components;

// state - count : 0
// action  - increment decrement reset
// reducer - increment -> count = count + 1
// - decrement -> count = count - 1
// - reset -> count = 0
//  store  