import { createSlice } from "@reduxjs/toolkit";

// export our slice to be importee
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    // this can be named anything - 'count' would be a good name for example
    value: 0
  },
  reducers: {
    // these are all actions
    increment: (state) => {
      // if you change the name of the initialState, change the name below as well
      // change "state" to "count" for example
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// export these actions so they can be called in our application
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
