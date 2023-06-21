import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./types";
import { RootState } from "../store";

export const fetchProducts = createAsyncThunk<ProductType[], string>(
  "products",
  async (name, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:5000/products`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

type RequestState = "pending" | "fulfilled" | "rejected";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [] as ProductType[],
    status: '' as string | RequestState
  },
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    // - store the 'pending' state as the status for the corresponding pokemon name
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding pokemon name
    // - and store the received payload as the data for the corresponding pokemon name
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    });
    // When our request is rejected:
    // - store the 'rejected' state as the status for the corresponding pokemon name
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "rejected";
    });
  }
});

export const selectStatus = (state: RootState, name: string) =>
  state.products.status;
export const selectProducts = (state: RootState, name: string) =>
  state.products.data;
