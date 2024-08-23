import { useRef, useEffect } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element on mount
    inputRef.current.focus();
  }, []);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default UseRefExample1;
