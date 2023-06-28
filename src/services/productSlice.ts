import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./types";
import { RootState } from "../store";
import { useGetProducts } from "../hooks/productHooks";


export const fetchProducts = createAsyncThunk<ProductType[]>(
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
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "rejected";
    });
  }
});

export const selectStatus = (state: RootState) =>
  state.products.status;
export const selectProducts = (state: RootState) =>
  state.products.data;
