import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products.slice";
import categoryReducer from "./category.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
  },
});
