import { useDispatch } from 'react-redux';
import { increment } from '../redux/counter';

export default function Increment({count, setCount}) {

  const dispatch = useDispatch();

  // function handleIncrement(e) {
  //   e.preventDefault();
  //   setCount(count+1);
  // }

  return(
    <button onClick={() => dispatch(increment())}>Increment</button>
  )
}