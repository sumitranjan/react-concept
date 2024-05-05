import React, { useReducer } from "react";
import "./Example1.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function Example3() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "increment", payload: 2 });
  }
  function decrement() {
    dispatch({ type: "decrement", payload: 2 });
  }
  return (
    <div>
      <h4>Counter</h4>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Example3;
