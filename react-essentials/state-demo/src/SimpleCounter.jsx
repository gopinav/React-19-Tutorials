import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render phase: Component rendering with count =", count);

  const handleClick = () => {
    setCount(count + 1);
    console.log("After setCount(count + 1), count is:", count);
    setCount(count + 5);
    console.log("After setCount(count + 5), count is:", count);
    setCount(count + 10);
    console.log("After setCount(count + 10), count is:", count);
    setTimeout(() => {
      console.log("After 2 seconds, count is:", count);
    }, 2000);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Update count</button>
    </div>
  );
};
