import { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const initialData = {
    products: [],
    currentProduct: {},
    cart: [],
  };
  const [data, setData] = useState(initialData);
  return (
    <ProductsContext.Provider value={{ data, setData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
