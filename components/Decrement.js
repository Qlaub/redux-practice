import { useDispatch } from 'react-redux';
import { decrement } from '../redux/counter';

export default function Decrement() {

  const dispatch = useDispatch();

  // function handleDecrement(e) {
  //   e.preventDefault();
  //   dispatch(decrement());
  // }

  return(
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  )
}