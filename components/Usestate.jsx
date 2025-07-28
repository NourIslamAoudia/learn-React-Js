import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0); // setCount is a function to update the count state
  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
};

export default Usestate;
