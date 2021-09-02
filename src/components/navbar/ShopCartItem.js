import React from "react";
import accounting from "accounting";

const ShopCartItem = ({ title, price }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <small>{title}</small>
      </div>
      <small className="fw-bold">{accounting.formatMoney(price, "S/.")}</small>
    </li>
  );
};

export default ShopCartItem;
