import '../scss/ProductList.scss';
import { useAppDispatch} from "../hooks/hooks";
import { useGetProducts } from "../hooks/productHooks";
import { ProductType } from '../services/types';
import {add} from '../services/cartSlice';

export default function ProductList(){
  const dispatch = useAppDispatch();
  const { data } = useGetProducts();
  const productItems = data.map((product: ProductType) =>
    <div key={product.id} className="product-card">
          <img
            className="product-img"
            src={product.imageUrl}
            alt={product.title}
            width={100}
            height={100}
          />
          <section className="product-details">
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            <p>{product.stocked}</p>
            <div className="button-container-div">
              <button className="button" onClick={()=> dispatch(add(product))}>Ajouter au panier</button>
            </div>
          </section>
      </div>
  );
  
  return (
    <section className='product-list'>{productItems}</section>
  );
}


  
