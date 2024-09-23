import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Set axios defaults globally
// axios.defaults.baseURL = 'https://backend-paw-rho.vercel.app/api/v1';
axios.defaults.baseURL = 'http://localhost:1234/api/v1';
axios.defaults.withCredentials = true;

// Initial state
const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const getAllProduct = createAsyncThunk(
  "crud/getAllProduct",
  async () => {
    const response = await axios.get(`/products/`);
    return response.data;
  }
);

export const getProductbyId = createAsyncThunk(
  "crud/getProductbyId",
  async (id) => {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "crud/updateProduct",
  async ({ id, data }) => {
    const response = await axios.patch(`/products/${id}`, data);
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "crud/addProduct",
  async (data) => {
    const response = await axios.post(`/products/`, data);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "crud/deleteProduct",
  async (id) => {
    const response = await axios.delete(`/products/${id}`);
    return { id }; // Return the product ID instead of the deleted product
  }
);

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
        state.error = action.error.response?.data?.msg || action.error.message;
      });

    builder
      .addCase(getProductbyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductbyId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [action.payload]; // Stores the product as array
        state.error = null;
      })
      .addCase(getProductbyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.response?.data?.msg || action.error.message;
      });

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
        state.error = action.error.response?.data?.msg || action.error.message;
      });

    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Adds the new product
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.response?.data?.msg || action.error.message;
      });

    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const deletedProductId = action.meta.arg; // Use passed ID since response might not have the product
        state.data = state.data.filter(
          (product) => product._id !== deletedProductId
        );
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.response?.data?.msg || action.error.message;
      });
  },
});

// Export the reducer
export default crudSlice.reducer;