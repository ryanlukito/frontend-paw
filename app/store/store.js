import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import your reducer

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  // crud: 
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
