const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.count++;
    },
    decrementCounter: (state) => {
      state.count--;
    },
    resetCounter: (state) => {
      state.count = 0;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;

// export the counter reducer function and action creators here
