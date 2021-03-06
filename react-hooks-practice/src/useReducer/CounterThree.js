// Use Multiple useReducer
// used to manage 2 indepent counters with the same transitions

// 1. Import {useReducer} from 'react'
// 2. const [ count, dispatch ] = useReducer(reducer, initialState) in side component
//      useReducer returns a pair of values [currentState , dispatch] => destructure them
// 3. create reducer and initialState outside of component
//      reducer also uses a switch/ case condition
// 4. onClick will dispatch action () => dispatch('')

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  // use a second reducer if the reducer function can be reused for the same transition
  // on a second counter
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Counter One - {count}</div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>

      <div>
        <div>Counter Two - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default CounterOne;
