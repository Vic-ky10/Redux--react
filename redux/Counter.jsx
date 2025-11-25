import {useSelector , useDispatch} from "react-redux";
import {increment , decrement } from "./redux/counterSlice";
 
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{}}>
      <h1>{count}</h1>

      <button></button>
      <button></button>
    </div>
  );
}

export default Counter;
