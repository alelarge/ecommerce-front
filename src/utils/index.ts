import { ProductType } from './types';

export function getProductIndexFromCart(cart: ProductType[], productId: number){
    const isInCart = (product:ProductType) => product.id === productId;
    return cart.findIndex(isInCart);
}