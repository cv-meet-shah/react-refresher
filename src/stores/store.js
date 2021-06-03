import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products.slice";
import categoryReducer from "./category.slice";
import restaurentReducer from "./restaurent.slice";
import reviewReducer from "./reviews.slice";
import cartReducer from "./cart.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    restaurent: restaurentReducer,
    reviews: reviewReducer,
    cart: cartReducer,
  },
});
