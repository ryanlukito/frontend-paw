"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// Thunks for CRUD operations

// Get all products
export const getAllProduct = createAsyncThunk("crud/getAllProduct", async () => {
  const response = await axios.get(
    `https://backend-paw-rho.vercel.app/api/v1/products/`
  );
  return response.data;
});

// Get product by ID
export const getProductbyId = createAsyncThunk(
  "crud/getProductbyId",
  async (id) => {
    const response = await axios.get(
      `https://backend-paw-rho.vercel.app/api/v1/products/${id}`
    );
    return response.data;
  }
);

// Update product by ID
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

// Add new product
export const addProduct = createAsyncThunk(
  "crud/addProduct",
  async ({ data }) => {
    const response = await axios.post(
      `https://backend-paw-rho.vercel.app/api/v1/products/`,
      data
    );
    return response.data;
  }
);

// Delete product by ID
export const deleteProduct = createAsyncThunk(
  "crud/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `https://backend-paw-rho.vercel.app/api/v1/products/${id}`
    );
    return response.data;
  }
);

// Slice for handling CRUD operations
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {}, // You can add custom reducers here if needed
  extraReducers: (builder) => {
    // Get all products
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Get product by ID
    builder
      .addCase(getProductbyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductbyId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [action.payload]; // Stores the product data as an array
        state.error = null;
      })
      .addCase(getProductbyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Update product by ID
    builder
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        state.data = state.data.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        );
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Add new product
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Adds the new product to the data array
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Delete product by ID
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const deletedProductId = action.payload._id;
        state.data = state.data.filter((product) => product._id !== deletedProductId);
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default crudSlice.reducer;
