import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registerReducer from "./registerSlice";

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
