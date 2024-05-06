import React, { useReducer } from "react";
import "./Example1.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Example2() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Counter</h4>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default Example2;
