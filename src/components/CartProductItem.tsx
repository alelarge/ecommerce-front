import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { ProductType } from '../utils/types';
import { setProductQuantity, substract, add, remove } from '../redux/slices/cartSlice';

type CartProductItemProps = {
    product: ProductType;
}

export default function CartProductItem({product}:CartProductItemProps) {
    const dispatch = useAppDispatch();
    const [productQuantity, setLocalProductQuantity] = React.useState(product.quantity.toString());

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newQuantity = '';
        if (event.target.value) {
            newQuantity = event.target.value;
        }
        setLocalProductQuantity(newQuantity);
    }

    React.useEffect(() => {
        setLocalProductQuantity(product.quantity.toString());
    }, [product]);

    const handleSetQuantity = (productId: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
          dispatch(setProductQuantity({ productId, quantity: newQuantity }));
        } else {
            setLocalProductQuantity(product.quantity.toString());
        }
    };

    const handleDelete = (product: ProductType) => {
        dispatch(remove(product));
    };

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
              <button className="button" onClick={() => dispatch(substract(product))}>-</button>
              <input
                className="js-cart-line-product-quantity form-control"
                type="text"
                value={productQuantity}
                onChange={handleQuantityChange}
                onBlur={(event) => handleSetQuantity(product.id, event)}
                min="1"
              />
              <button className="button" onClick={() => dispatch(add(product))}>+</button>
              <button className="button" onClick={() => handleDelete(product)}>Supprimer</button>
            </section>
          </section>
        </div>
      );
}