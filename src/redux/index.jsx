import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import databaseReducer from "./DatabaseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    database:databaseReducer
  },
});
