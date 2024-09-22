import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import your reducer

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer, // Add other reducers here if necessary
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
