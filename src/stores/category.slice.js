import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../utilities/api";
import { ZomatoConstants } from "../utilities/zomato.constants";

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAllCategories",
  async () => {
    const response = await api.get(ZomatoConstants.categoryUrl);
    return response.data.categories.map((cat) => cat.categories);
  }
);

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // omit existing reducers here
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload
      );
      state.categories.splice(index, 1);
    },
    loadAllCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: {
    [fetchAllCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllCategories.fulfilled]: (state, action) => {
      state.status = "succeed";
      // Add any fetched posts to the array
      state.categories = state.categories.concat(action.payload);
    },
    [fetchAllCategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { addCategory, removeCategory, loadAllCategories } = categorySlice;

export default categorySlice.reducer;

export const selectAllCategories = (state) => state.categories;
