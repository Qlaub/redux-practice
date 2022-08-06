import { configureStore } from "@reduxjs/toolkit";
// countReducer can be imported as any value as long as the value matches in the reducer below
import counterReducer from'./counter'

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
});