import { useDispatch, useSelector } from "react-redux";
import {
  pausetimer,
  resetimer,
  starttimer,
} from "../redux/reducers/timerReducer"; // Correct action imports
// Importing the reducer is not necessary in this component
// import { timerReducer } from "../redux/reducers/timerReducer"; // Remove this line

export const TimerActions = () => {
  const dispatch = useDispatch();
  // Use the correct state variable name
  const { isRunning } = useSelector((state) => state.timerReducer);

  return (
    <div className="actions">
      <button disabled={isRunning} onClick={() => dispatch(starttimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => dispatch(pausetimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => dispatch(resetimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
