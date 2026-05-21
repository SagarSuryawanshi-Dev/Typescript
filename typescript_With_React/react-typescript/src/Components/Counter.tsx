import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState <number>(0);

  return (
    <>
      <p>Cups Ordered: {count}</p>
      <button onClick={() => setCount(count + 1)}>One more Ordered</button>
    </>
  );
}

