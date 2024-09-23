import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import crudReducer from "./crudSlice";
import registerReducer from "./registerSlice";

// Configure the store
const store = configureStore({
  reducer: {
    auth: authReducer,
    crud: crudReducer,
    register: registerReducer,
  },
});

export default store;
