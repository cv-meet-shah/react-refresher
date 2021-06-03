import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../utilities/localStorage-util";

const initialState = {
  cart: loadState() || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, product } = action.payload;
      const { cart } = state;
      let cartItem = cart.find((cartItem) => cartItem.id === id);
      if (!cartItem) {
        cart.push({
          qty: 1,
          id,
          product,
        });
      } else {
        cartItem.qty++;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const alreadyExist = state.cart.find((cartItem) => cartItem.id === id);
      if (alreadyExist) {
        alreadyExist.qty--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart;
