import { API_URL } from "services/settings";
const data = {
  products: [],
  currentProduct: {},
  error: null,
  message: [],
};

const fromApiProducts = (res) => {
  if (res !== undefined) return { ...data, products: res };
  return { ...data, error: true };
};
const fromApiCurrentProduct = (res) => {
  if (res !== undefined) return { ...data, currentProduct: res };
  return { ...data, error: true };
};

export const getProducts = (id) => {
  const endpoint = `${API_URL}/products/${id ? id : ""}`;
  return fetch(endpoint)
    .then(
      (res) => res.json(),
      () => {
        data.error = true;
        data.message.push("Error al conectarse al servidor");
      }
    )
    .then(
      (res) => (id ? fromApiCurrentProduct(res) : fromApiProducts(res)),
      (error) => data
    );
};
