import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/productSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
