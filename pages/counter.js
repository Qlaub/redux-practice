import Count from "../components/count";
import Decrement from "../components/decrement";
import Increment from "../components/increment";

export default function Counter() {

  return (
    <div>
      <h1>Click the buttons to change the count displayed:</h1>
      <Increment /><Decrement />
      <Count />
    </div>
  )
}