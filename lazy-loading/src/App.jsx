import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";

const LazyLoading = lazy(() => import("./LazyLoading"));

function Loading() {
  // useEffect(() => {
  //   console.log("!Loading component mounted!......");

  //   // Cleanup function for when component is unmounted
  //   return () => {
  //     console.log("!Loading component unmounted!......");
  //   };
  // }, []); // Empty dependency array means this effect runs only once (on mount)

  console.log("!Loading component Rendered!.....");
  return <p style={{ color: "red" }}>Loading...</p>;
}

function App() {
  const [showPreview, setShowPreview] = useState(false);

  function handleClick() {
    setShowPreview((prev) => !prev);
  }
  console.log("App component Rendered");

  return (
    <div className="container">
      <h1>Lazy loading example</h1>
      <button onClick={handleClick}>Load lazy</button>
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <LazyLoading />
        </Suspense>
      )}
    </div>
  );
}

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
