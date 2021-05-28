import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../utilities/api";
import { ZomatoConstants } from "../utilities/zomato.constants";

export const fetchRestaurentById = createAsyncThunk(
  "restaurent/fetch",
  async (restaurentId) => {
    const response = await api.get(
      `${ZomatoConstants.restaurantUrl}?res_id=${restaurentId}`
    );
    return response.data;
  }
);

const initialState = {
  restaurent: {},
  status: "idle",
  error: null,
};

export const restaurentSlice = createSlice({
  name: "restaurent",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRestaurentById.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchRestaurentById.fulfilled]: (state, action) => {
      state.status = "succeed";
      state.restaurent = action.payload;
    },
    [fetchRestaurentById.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default restaurentSlice.reducer;

export const selectRestaurent = (state) => state.restaurent;
