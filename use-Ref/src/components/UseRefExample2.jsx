import { useRef } from "react";

const UseRefExample2 = () => {
  const counterRef = useRef(0);

  const increment = () => {
    counterRef.current += 1;
    console.log(`Counter value: ${counterRef.current}`);
  };

  return (
    <div>
      <p>Counter: {counterRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseRefExample2;
