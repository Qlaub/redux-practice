export default function Decrement({count, setCount}) {

  function handleDecrement(e) {
    e.preventDefault();
    setCount(count-1);
  }

  return(
    <button onClick={handleDecrement}>Decrement</button>
  )
}