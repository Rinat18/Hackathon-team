export const getLocal = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};
export const getProductsCountInCart = () => {
  let cart = getLocal();
  return cart ? cart.products.length : 0;
};
export const calcSubPrice = (elem) => {
  console.log(elem);
  return elem.item.price * elem.count;
};
export const getLocalFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorite"));
  return favorites;
};
