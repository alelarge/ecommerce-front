import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./services/productSlice";
import { cartSlice } from "./services/cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
