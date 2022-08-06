import { useState } from "react";
import Count from "../components/count";
import Decrement from "../components/decrement";
import Increment from "../components/increment";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Click the buttons to change the count displayed:</h1>
      <Increment count={count} setCount={setCount} /><Decrement count={count} setCount={setCount} />
      <Count count={count} />
    </div>
  )
}