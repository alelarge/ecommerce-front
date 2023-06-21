import '../scss/ProductList.scss';
import { useGetProducts } from "../hooks/productHooks";
import { ProductType } from '../services/types';

export default function ProductList(){
  function handleClick() {
      alert('ajouter au panier');
  }
  const { data } = useGetProducts();
  const productItems = data.map((product: ProductType) =>
    <div className="product-card">
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
              <button className="button" onClick={handleClick}>Ajouter au panier</button>
            </div>
          </section>
      </div>
  );
  
  return (
    <section className='product-list'>{productItems}</section>
  );
}


  
