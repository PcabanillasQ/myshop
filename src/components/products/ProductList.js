import React from "react";
import Product from "./Product";
import { useProducts } from "hooks/useProducts";
import { useCart } from "hooks/useCart";

const ProductList = () => {
  const { addCart } = useCart();
  const { products, loading } = useProducts();

  return (
    <div className="row">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => {
          const { id, image, title, price } = product;
          return (
            <div key={id} className="col-sm-6 col-md-4 col-lg-3 ">
              <Product {...{ id, image, title, price, addCart }} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default React.memo(ProductList);
