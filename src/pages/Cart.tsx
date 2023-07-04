import '../scss/About.scss';
import { useAppSelector,useAppDispatch} from '../hooks/hooks';
import { ProductType } from '../utils/types';
import '../scss/Cart.scss';
import {remove} from '../redux/slices/cartSlice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.cart.products);
  // const totalQuantity = useAppSelector(state => state.cart.totalQuantity);

  const cartProductItems = cartProducts.map((product: ProductType) => (
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
        <h2>Quantité :{product.quantity}</h2>
        <h3>{product.description}</h3>
        <button className="button" onClick={()=> dispatch(remove(product))}>Retirer du panier</button>
      </section>
    </div>
  ));

  return (
    <section className="cart-list">
      {cartProductItems}
    </section>
    // <div className="cart-page">
    //   { <section>
    //     <h1>Votre panier</h1>
    //     <h2>Quantité des articles: {totalQuantity}</h2>
    //     <p>Livraison</p>
    //     <p>Total TTC</p>
    //     <button>Passer la commande </button>
    //     <button>Aller au panier </button>
    //   </section> }
     
    // </div>
    );
}