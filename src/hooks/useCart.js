import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "context/productsContext";

export const useCart = () => {
  const { data, setData } = useContext(ProductsContext);
  const [totalCart, setTotalCart] = useState(0);
  let cart = [];

  const addCart = (id) => {
    let cart = [...data.cart];
    let product = data.products.find((product) => product.id === Number(id));
    cart.push(product);
    setData({ ...data, cart });
  };

  useEffect(() => {
    let newTotalCart =
      cart.length !== 0
        ? cart.map((item) => item.price).reduce((acc, item) => acc + item)
        : 0;
    setTotalCart(newTotalCart);
  }, [cart]);
  cart = [...data.cart];
  let cartLength = cart.length;

  return { cart, addCart, cartLength, totalCart };
};
