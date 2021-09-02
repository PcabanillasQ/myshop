import React from "react";
import ShopCartItem from "./ShopCartItem";

const ShopCartList = ({ cart, totalCart }) => {
  return (
    <ul className="list-group list-group-flush">
      {cart.map((item) => (
        <ShopCartItem key={item.id} title={item.title} price={item.price} />
      ))}
      <ShopCartItem title="Total" price={totalCart} />
    </ul>
  );
};

export default ShopCartList;
