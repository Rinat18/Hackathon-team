import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import {
  calcSubPrice,
  calcTotalPrice,
  getLocal,
  getProductsCountInCart,
} from "../helpers/function";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: [],
  cartLength: getProductsCountInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    case "CLEAR_CART":
      return { ...state, cart: [], cartLength: 0 };
    default:
      return state;
  }
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! READ

  const readCart = () => {
    let cart = getLocal();
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: getProductsCountInCart(),
        })
      );
      cart = {
        products: [],
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  // ! ADD
  const addToCart = (card) => {
    let cart = getLocal();

    let newCartItem = {
      item: card,
      count: 1,
      subPrice: card.price,
    };

    let checkCardInCart = cart.products.filter(
      (elem) => elem.item.id === card.id
    );

    if (checkCardInCart.length === 0) {
      cart.products.push(newCartItem);
    } else {
      cart.products = cart.products.filter((elem) => elem.item.id !== card.id);
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  // ! Check styles

  const checkProductInCart = (id) => {
    let cart = getLocal();
    if (cart) {
      let checked = cart.products.filter((elem) => elem.item.id === id);
      return checked.length > 0 ? true : false;
    }
  };

  //! COUNT
  const changeProductCount = (id, count) => {
    let cart = getLocal();
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = +count;
        elem.subPrice = calcSubPrice(elem);
        cart.totalPrice = calcTotalPrice(cart.products);
      }
      return elem;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  // ! DELETE
  const deleteProductInCart = (id) => {
    let cart = getLocal();
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // ! CLEAR CART
  const clearCart = () => {
    localStorage.removeItem("cart");
    dispatch({ type: "CLEAR_CART" });
  };
  const values = {
    clearCart,
    readCart,
    addToCart,
    cart: state.cart,
    checkProductInCart,
    deleteProductInCart,
    changeProductCount,
    cartLength: state.cartLength,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
}
