import React, { useMemo, useState } from "react";
import "../App.css";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_000_000,
  };
});

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // const selectedItems = numbers.find((item) => item.isSelected === true); //Expensive Computation
  const selectedItems = useMemo(
    () => numbers.find((item) => item.id === count),
    [numbers, count] // Dependencies for useMemo (recompute if numbers or count changes)
  );
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Selected Item : {selectedItems?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter2;
