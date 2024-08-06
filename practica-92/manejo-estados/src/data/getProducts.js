//eslint-disable
export const fetchProductos = async () => {
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const product = await respuesta.json();

  return product;
};
