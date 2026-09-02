// Counter.jsx - a component connected to the store
import { useDispatch, useSelector } from "react-redux";
import { incremented } from "./counterSlice";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(incremented())}>
      Count: {value}
    </button>
  );
}
