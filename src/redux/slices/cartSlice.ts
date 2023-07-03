import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";
import { ProductType } from '../../utils/types';
import { getProductIndexFromCart } from '../../utils';

type cartState = {
    products: ProductType[],
}

const initialState: cartState = {
   products: [],
} 

export const cartSlice = createSlice({
  name: 'cart',
  initialState: () => {
    const result = localStorage.getItem('products');
    if(result){
        return {
            products: JSON.parse(result),
        }
    } else {
        return {
            products: [],
         } 
    }
  },
  reducers: {
      add: (state, action: PayloadAction<ProductType>) => {
        let productToAdd = action.payload;
        if(state.products.length === 0) {
            state.products = [productToAdd];
        } else {
            const productIndex = getProductIndexFromCart(state.products, productToAdd.id)
            if (productIndex !== -1) {
                state.products[productIndex].quantity += 1;
            } else {
                state.products = [
                    ...state.products,
                    action.payload,
                ];
            }
        }
        
        localStorage.setItem('products', JSON.stringify(state.products));
      }
  }
});

export const {add} = cartSlice.actions;
export const selectCartProducts = (state: RootState) => state.cart.products
export default cartSlice.reducer;
