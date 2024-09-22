"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const getAllProduct = createAsyncThunk(
  "crud/getAllProduct",
  async () => {
    const response = await axios.get(
      `https://backend-paw-rho.vercel.app/api/v1/products/`
    );
    return response.data;
  }
);

export const getProductbyId = createAsyncThunk(
  "crud/getProductbyId",
  async (id) => {
    const response = await axios.get(
      `https://backend-paw-rho.vercel.app/api/v1/products/${id}`
    );
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "crud/updateProduct",
  async ({ id, data }) => {
    const response = await axios.patch(
      `https://backend-paw-rho.vercel.app/api/v1/products/${id}`,
      data
    );
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "crud/updateProduct",
  async ({ data }) => {
    const response = await axios.post(
      `https://backend-paw-rho.vercel.app/api/v1/products/`,
      data
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "crud/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `https://backend-paw-rho.vercel.app/api/v1/products/${id}`
    );
    return response.data;
  }
);

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  },
});
