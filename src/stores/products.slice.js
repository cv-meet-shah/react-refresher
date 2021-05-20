import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../utilities/api";
import { ZomatoConstants } from "../utilities/zomato.constants";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await api.get(ZomatoConstants.categoryUrl);
    console.log("createAsyncThunk", response);
    return response.data.categories.map((cat) => cat.categories);
  }
);

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // omit existing reducers here
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products.splice(index, 1);
    },
    loadAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.status = "succeed";
      // Add any fetched posts to the array
      state.products = state.products.concat(action.payload);
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { addProduct, removeProduct, loadAllProducts } = productsSlice;

export default productsSlice.reducer;

export const selectAllProducts = (state) => state.products;
