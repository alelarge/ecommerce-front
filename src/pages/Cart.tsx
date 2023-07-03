import '../scss/About.scss';
import { useAppSelector} from '../hooks/hooks';
import { ProductType } from '../utils/types';

export default function Cart() {
  const cartProducts = useAppSelector(state => state.cart.products);

  const cartProductItems = cartProducts.map((product: ProductType) => (
    <div key={product.id} className="card">
      <img
        className="card-img"
        src={product.imageUrl}
        alt={product.title}
        width={100}
        height={100}
      />
      <section className="card-details">
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
      </section>
    </div>
  ));

  return <section className="card-list">{cartProductItems}</section>;
}