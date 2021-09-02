import { useCart } from "hooks/useCart";
import { useProducts } from "hooks/useProducts";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { currentProduct, loading } = useProducts(id);
  const { addCart } = useCart();
  const { image, title, description, category } = currentProduct;
  return (
    <div className="row">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="col-md-4">
            <img className="card-img-top" src={image} alt="" />
          </div>
          <div className="col-md-8">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              <small>{category}</small>
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                addCart(id);
              }}
            >
              Add to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
