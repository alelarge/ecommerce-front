import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./services/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
