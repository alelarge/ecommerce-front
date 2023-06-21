import '../scss/ProductList.scss';
import { useReducer } from "react";
import { useGetProducts } from "../hooks/productHooks";
import { ProductType } from '../services/types';

// function products(name) {
//   const { data, isError, isLoading } = useGetProducts(name);

//   return (
//     <div>
//       {isError ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <>
//           {/* <h3>{data.species.name}</h3>
//           <img src={data.product.imageUrl.name} alt={data.product.alt} /> */}
//         </>
//       ) : null}
//     </div>
//   );
// }

export default function ProductList(){
  const { data, isError, isLoading } = useGetProducts();
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
          </section>
      </div>
  );
  
  return (
    <section className='product-list'>{productItems}</section>
  );
}


  
