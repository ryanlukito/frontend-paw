"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const initialState = {
  loading: false,
  payload: null,
  error: null,
  isSuccess: false,
};

export const register = createAsyncThunk("register", async (data, thunkAPI) => {
  try {
    const response = await axios.post(
      `https://backend-paw-rho.vercel.app/api/v1/register`,
      data
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const regSLice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.payload = action.payload;
        state.error = null;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isSuccess = false;
      });
  },
});

export default regSLice.reducer;
