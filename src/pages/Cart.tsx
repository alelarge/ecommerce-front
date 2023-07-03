import '../scss/About.scss';
import {RootState} from "../redux/store";
import { selectCartProducts } from '../redux/slices/cartSlice';
import { useAppSelector } from '../hooks/hooks';

export default function Cart() {
  //const products = selectCartProducts(state);
  const cartProducts = useAppSelector(state => state.cart.products);
  console.log('cartProducts', cartProducts);

    return (
        <>
        <h1>Miel de forêt</h1>
        <h2>Quantité : 1</h2>
        <p>Prix: 16 euros</p>
        <button>Retirer du panier</button>
        </>
      );
}