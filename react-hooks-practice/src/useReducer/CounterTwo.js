// COMPLEX STATE AND ACTION EXAMPLE FOR useReducer
// state and actions are objects

// 1. Import {useReducer} from 'react'
// 2. const [ count, dispatch ] = useReducer(reducer, initialState) in side component
//      useReducer returns a pair of values [currentState , dispatch] => destructure them
// 3. create reducer and initialState outside of component
//      reducer also uses a switch/ case condition
// 4. onClick will dispatch action () => dispatch('')
//      don't forget to spread (...state) the current state to merge new state
// 5. using action as an object, you can specify other datas such as values
// 6. using state as object can also be used to manage multiple states
//    more suited for keeping global state variables
//    there is another way to keep track of multiple local variables

import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Counter Two - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterOne;
