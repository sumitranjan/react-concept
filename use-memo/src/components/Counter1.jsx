import React, { useMemo, useState } from "react";
import "../App.css";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_000_000,
  };
});

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // const selectedItems = numbers.find((item) => item.isSelected === true); //Expensive Computation

  // Memoize the selected item based on numbers array
  const selectedItems = useMemo(
    () => numbers.find((item) => item.isSelected === true),
    [numbers] // Dependencies for useMemo (recompute if numbers changes)
  );
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter1;
