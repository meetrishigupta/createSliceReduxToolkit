// remove the timer action creators imports

const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

const timerSlice = createSlice({
  name: "timer",
  INITIAL_STATE,
  reducer: {
    starttimer: (state) => {
      state.isRunning = true;
    },
    pausetimer: (state) => {
      state.isRunning = false;
    },
    resetimer: (state) => {
      state.isRunning = false;
      state.elapsedTime = 0;
    },
    increamenttimer: (state) => {
      state.elapsedTime++;
    },
  },
});

export const timerReducer = timerSlice.reducer;

export const { starttimer, pausetimer, resetimer, increamenttimer } =
  timerSlice.actions;

// export the timer reducer function and action creators here
