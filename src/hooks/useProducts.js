import { ProductsContext } from "context/productsContext";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "services/products/getProducts";

export const useProducts = (id = null) => {
  const { data, setData } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts(id).then((res) => {
      if (res.error) {
        setLoading(false);
        alert(res.message);
      }
      if (id) {
        setData({ ...data, currentProduct: res.currentProduct });
      } else {
        setData({ ...data, currentProduct: {}, products: res.products });
      }
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  return {
    products: data.products,
    currentProduct: data.currentProduct,
    loading,
  };
};
