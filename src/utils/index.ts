import { ProductType } from './types';

export function getProductIndexFromCart(cart: ProductType[], productId: number){
    let productIndex;
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
  
      if(productId === productId) {
        productIndex = i;
      }

      return productIndex;
    }
}