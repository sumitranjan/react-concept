import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [count, setCount] = useState(5);
  return (
    <CounterContext.Provider value={{ name: "sumit", count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
