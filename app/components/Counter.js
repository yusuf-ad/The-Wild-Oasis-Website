"use client";

import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return <button onClick={() => setCount((c) => c + 1)}>{count} </button>;
}

export default Counter;
