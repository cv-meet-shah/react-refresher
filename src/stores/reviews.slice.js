import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../utilities/api";
import { ZomatoConstants } from "../constants/zomato.constants";

export const fetchReviewsByRestaurentId = createAsyncThunk(
  "reviews/fetch",
  async (restaurentId) => {
    const response = await api.get(
      `${ZomatoConstants.reviewUrl}?res_id=${restaurentId}`
    );
    return response.data.user_reviews.map((resp) => resp.review);
  }
);

const initialState = {
  reviews: [],
  status: "idle",
  error: null,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReviewsByRestaurentId.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchReviewsByRestaurentId.fulfilled]: (state, action) => {
      state.status = "succeed";
      state.reviews = action.payload;
    },
    [fetchReviewsByRestaurentId.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default reviewSlice.reducer;

export const selectReviews = (state) => state.reviews;
