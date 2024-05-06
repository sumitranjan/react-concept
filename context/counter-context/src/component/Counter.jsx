import React, { useContext } from "react";
import "../App.css";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const counterState = useContext(CounterContext);
  //   console.log(counterState);
  return (
    <div>
      <h3>Count is {counterState.count}</h3>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
