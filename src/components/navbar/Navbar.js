import React from "react";
import { Link } from "react-router-dom";
import ShopCartBtn from "./ShopCartBtn";

const Navbar = () => {
  return (
    <nav className="shopnavbar navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <div className="container-md">
        <Link className="navbar-brand" to="/">
          My<span className="text-warning fw-bold">Shop</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Products
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <ShopCartBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
