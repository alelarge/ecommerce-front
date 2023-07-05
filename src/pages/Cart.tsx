import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { ProductType } from '../utils/types';
import '../scss/Cart.scss';
import { setProductQuantity, substract, add } from '../redux/slices/cartSlice';
import CartProductItem from '../components/CartProductItem';

export default function Cart() {
  const cartProducts = useAppSelector(state => state.cart.products);

  const cartProductItems = cartProducts.map((product: ProductType) => {
    return <CartProductItem key={product.id} product={product} />
  });

  return (
    <div>
      <section className="cart-list">
        {cartProductItems}
      </section>
      <div className="cart-page">
        <section>
          <h1>Votre panier</h1>
          <p>Livraison</p>
          <p>Total TTC</p>
          <button>Passer la commande</button>
          <button>Aller au panier</button>
        </section>
      </div>
    </div>
  );
}
