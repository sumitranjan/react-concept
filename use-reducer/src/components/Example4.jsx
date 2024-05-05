import React, { useReducer } from "react";
import "./Example1.css";

const ACTIONS = {
  INCREMENT: "increement",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + action.payload };
    case ACTIONS.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function Example4() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT, payload: 2 });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT, payload: 2 });
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

export default Example4;
