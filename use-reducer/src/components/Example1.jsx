import React, { useReducer } from "react";
import "./Example1.css";

function reducer(state, action) {
  return { count: state.count + 1 };
}
function Example1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch();
  }
  function decrement() {}
  return (
    <div>
      <h4>Counter</h4>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Example1;
