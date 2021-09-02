import React from "react";
import accounting from "accounting";
import { Link } from "react-router-dom";

const Product = ({ id, image, title, price, addCart }) => {
  return (
    <div className="card shopProduct mb-4">
      <Link to={`/producto/${id}`} className="shopProduct__image">
        <img src={image} alt={title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title shopProduct__title">{title}</h5>
        <p className="card-text">{accounting.formatMoney(price, "S/.")}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            addCart(id);
          }}
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Product;
