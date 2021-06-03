import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products.slice";
import categoryReducer from "./category.slice";
import restaurentReducer from "./restaurent.slice";
import reviewReducer from "./reviews.slice";
import cartReducer from "./cart.slice";
import { saveState } from "../utilities/localStorage-util";
import { reducer as toastrReducer } from "react-redux-toastr";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    restaurent: restaurentReducer,
    reviews: reviewReducer,
    cart: cartReducer,
    toastr: toastrReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});
