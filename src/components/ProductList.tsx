import '../scss/ProductList.scss';

type ProductType = {
    imageUrl: string,
    altTxt: string,
    title: String,
    description : String,
    price: Number,
    quantity: Number,
    stocked: boolean,
};
  
export default function ProductList(props: any){
    const products = props.products;
    const productItems = products.map((product: ProductType) =>
      <div className="product-card">
            <img
            className="product-img"
            src= {product.imageUrl}
            alt={product.altTxt}
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