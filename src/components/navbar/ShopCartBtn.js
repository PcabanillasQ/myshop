import React from "react";
import { useCart } from "hooks/useCart";
import ShopCartList from "./ShopCartList";
import Modal from "components/sharing/Modal";

const ShopCartBtn = () => {
  const { cart, cartLength, totalCart } = useCart();
  return (
    <>
      <button
        type="button"
        className="btn position-relative"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        <i className="bi bi-cart-fill me-2 fs-4 text-white"></i>
        <span className="badge bg-danger position-absolute rounded-circle">
          {cartLength}
        </span>
      </button>
      {/* Modal */}
      <Modal btnRef="cartModal" title="Shop Cart List">
        <ShopCartList {...{ cart, totalCart }} />
      </Modal>
    </>
  );
};

export default ShopCartBtn;
