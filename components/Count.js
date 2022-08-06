import { useSelector } from 'react-redux';

export default function Count() {

  const { value } = useSelector((state) => state.counter);
  // another option below, same thing
  // const { count } = useSelector((state) => state.counter.count)

  return (
    <h2>{value}</h2>
  )
}