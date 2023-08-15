import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
import globalReducer from "../features/globalSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    global: globalReducer,
  },
});
