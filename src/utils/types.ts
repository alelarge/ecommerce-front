export type ProductType = {
    id: number,
    imageUrl: string,
    title: string,
    description : string,
    price: number,
    quantity: number,
};

export type CartState = {
    products: ProductType[];
  //   totalQuantity: number;
  };
  
export const initialState: CartState = {
    products: [],
  //   totalQuantity: 0,
  };