import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { ProductType } from '../utils/types';
import '../scss/Cart.scss';
import { setProductQuantity, remove, add } from '../redux/slices/cartSlice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.cart.products);

  const handleQuantityChange = (product: ProductType, event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;

    const newQuantity = parseInt(newInputValue, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 999) {
      dispatch(setProductQuantity({ ...product, quantity: newQuantity }));
    } else if (isNaN(newQuantity) || newQuantity === 0) {
      dispatch(setProductQuantity({ ...product, quantity: 0 }));
    }
  };

  const handleDelete = (product: ProductType) => {
    dispatch(remove(product));
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cartProducts.forEach((product: ProductType) => {
      totalQuantity += product.quantity;
    });
    return totalQuantity;
  };

  const cartProductItems = cartProducts.map((product: ProductType) => {
    if (product.quantity > 0) {
      return (
        <div key={product.id} className="product-cart">
          <img
            className="card-img"
            src={product.imageUrl}
            alt={product.title}
            width={100}
            height={100}
          />
          <section className="card-details">
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <section>
              <button className="button" onClick={() => dispatch(remove(product))}>-</button>
              <input
                type="number"
                value={product.quantity.toString()}
                onChange={(event) => handleQuantityChange(product, event)}
                min="1"
                max="999"
              />
              <button className="button" onClick={() => dispatch(add(product))}>+</button>
              <button className="button" onClick={() => handleDelete(product)}>Supprimer</button>
            </section>
          </section>
        </div>
      );
    }
    return null;
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