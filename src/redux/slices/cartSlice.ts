import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";
import { ProductType } from '../../utils/types';
import { getProductIndexFromCart } from '../../utils';

type cartState = {
    products: ProductType[],
    totalQuantity: number;

}

const initialState: cartState = {
   products: [],
   totalQuantity: 0,

} 

export const cartSlice = createSlice({
  name: 'cart',
  initialState: () => {
    const result = localStorage.getItem('products');
    if(result){
        return {
            products: JSON.parse(result),
            // totalQuantity: 0,
        }
    } else {
        return initialState
    }
  },
  reducers: {
      setProductQuantity: (state, action: PayloadAction<ProductType>) => {
          let productToUpdate = action.payload;
        const productIndex = getProductIndexFromCart(state.products, productToUpdate.id)
        if (productIndex !== -1) {
            state.products[productIndex].quantity += 1;
        }
      },
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

      },
      remove: (state, action: PayloadAction<ProductType>) => {
        const productToRemove = action.payload;
        const productIndex = getProductIndexFromCart(state.products, productToRemove.id);
        if (productIndex !== -1) {
          const product = state.products[productIndex];
          if (product.quantity === 1) {
            state.products.splice(productIndex, 1);
          } else {
            product.quantity -= 1;
          }
          localStorage.setItem('products', JSON.stringify(state.products));
        }
      }
  }
});

export const {add} = cartSlice.actions;
export const {remove} = cartSlice.actions;
export const {setProductQuantity} = cartSlice.actions;

export const selectCartProducts = (state: RootState) => state.cart.products
export default cartSlice.reducer;