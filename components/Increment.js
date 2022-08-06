export default function Increment({count, setCount}) {

  function handleIncrement(e) {
    e.preventDefault();
    setCount(count+1);
  }

  return(
    <button onClick={handleIncrement}>Increment</button>
  )
}