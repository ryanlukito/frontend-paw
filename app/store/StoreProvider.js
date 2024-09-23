"use client";

import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.withCredentials = true;

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
