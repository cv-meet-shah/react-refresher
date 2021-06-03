import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  status: "idle",
  error: null,
};

const cartAdapter = createEntityAdapter({
  updateCart: (cart) => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  },
});

const cartKey = "cart";
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, productDetail } = action.payload;
      const alreadyExist = state.cart.find(
        (cartItem) => cartItem.id === id
      ) || {
        qty: 0,
        id,
        productDetail,
      };
      alreadyExist.qty++;
      cartAdapter.updateCart(state.cart);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const alreadyExist = state.cart.find((cartItem) => cartItem.id === id);
      if (alreadyExist) {
        alreadyExist.qty--;
      }
      cartAdapter.updateCart(state.cart);
    },
    loadCart: (state, action) => {
      let cart = JSON.parse(localStorage.getItem(cartKey));
      if (!Array.isArray(cart)) cart = [];
      state.status = "loaded";
      state.cart = cart;
    },
  },
});

export const { addToCart, removeFromCart, loadCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart;
