type ProductType = {
    imageUrl: string,
    altTxt: String,
    title: String,
    description : String,
    price: Number,
    quantity: Number,
    stocked: boolean,
};
  
export default function ProductList(props: any){
    const products = props.products;
    const productItems = products.map((product: ProductType) =>
      <article>
        <img
        className="product-img"
        src= {product.imageUrl}
        alt="Type de miel"
        width={100}
        height={100}
      />
        {/* {product.imageUrl}
        {product.altTxt} */}
        <section>
          <h1>{product.title}</h1>
          <h2>{product.description}</h2>
          {/* <p>{product.price}</p>
          <p>{product.quantity}</p> */}
          <p>{product.stocked}</p>
        </section>
      </article>
    );
    
    return (
      <section className='product-list'>{productItems}</section>
    );
  }