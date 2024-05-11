import React, { useEffect } from "react";

const LazyLoading = () => {
  //   useEffect(() => {
  //     console.log("LazyLoading component mounted");

  //     // Cleanup function for when component is unmounted
  //     return () => {
  //       console.log("LazyLoading component unmounted");
  //     };
  //   }, []); // Empty dependency array means this effect runs only once (on mount)

  console.log("LazyLoading component Rendered");
  return <h2>Component loaded with lazy loading...</h2>;
};

export default LazyLoading;
