import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../utilities/api";
import { ZomatoConstants } from "../utilities/zomato.constants";

export const fetchAllProductsByCategoryId = createAsyncThunk(
  "products/fetchAllProductsByCategoryId",
  async (categoryId) => {
    const response = await api.get(
      `${ZomatoConstants.searchUrl}?category=${categoryId}`
    );
    const products = response.data.restaurants.map((rest) => rest.restaurant);
    return {
      categoryId,
      products,
    };
  }
);

const initialState = {
  categories: {},
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
    [fetchAllProductsByCategoryId.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllProductsByCategoryId.fulfilled]: (state, action) => {
      state.status = "succeed";
      const {categoryId, products} = action.payload;
      state.categories = {
        ...state.categories,
        [categoryId]: products
      }
    },
    [fetchAllProductsByCategoryId.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { addProduct, removeProduct, loadAllProducts } = productsSlice;

export default productsSlice.reducer;

export const selectAllProducts = (state) => state.products;

export const selectProductsByCategoryId = (state, categoryId) => {
  const products = selectAllProducts(state);
  return {
    products: (products.categories[categoryId]) || [],
    error: products.error,
    status: products.status,
  };
};
