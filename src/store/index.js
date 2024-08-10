import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import testReducer from "./testSlice.js";

export default configureStore({
  reducer: {
    todos: todoReducer,
    test: testReducer,
  },
});
