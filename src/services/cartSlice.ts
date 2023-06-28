import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";
import { ProductType } from './types';

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
        let isAlreadyInCart = false;
        if(state.products.length === 0){
            state.products = [action.payload];
        } else {
            for (let i = 0; i < state.products.length; i++) {
                const product = state.products[i];
    
                if(action.payload.id === product.id) {
                    isAlreadyInCart = true;
                    state.products[i].quantity += 1;
                }
            }

            if(!isAlreadyInCart) {
                state.products = [
                    ...state.products,
                    action.payload,
                ]
            }
        }
          localStorage.setItem('products', JSON.stringify(state.products));
      }
  }
});

export const {add} = cartSlice.actions;
export const selectCartProducts = (state: RootState) => state.cart.products
export default cartSlice.reducer;
