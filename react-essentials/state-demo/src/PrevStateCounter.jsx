import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render phase: Component rendering with count =", count);

  const handleClick = () => {
    setCount((prev) => {
      console.log("First updater fn: prev count =", prev);
      return prev + 1;
    });

    setCount((prev) => {
      console.log("Second updater fn: prev count =", prev);
      return prev + 5;
    });

    setCount((prev) => {
      console.log("Third updater fn: prev count =", prev);
      return prev + 10;
    });
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Update count</button>
    </div>
  );
};
