import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timerReducer } from "../redux/reducers/timerReducer"; // change the timer actions imports
import { increamenttimer } from "../redux/reducers/timerReducer";
export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector((state) => state.timerReducer);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(increamenttimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
