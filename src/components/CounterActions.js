import { useDispatch, useSelector } from "react-redux";
// change the counter actions imports
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../redux/reducers/counterReducer";

export const CounterActions = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterReducer); // Use 'counterReducer' here

  return (
    <div className="actions">
      <button
        disabled={count <= 0}
        onClick={() => dispatch(decrementCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      <button
        disabled={count >= 10}
        onClick={() => dispatch(incrementCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      <button onClick={() => dispatch(resetCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
