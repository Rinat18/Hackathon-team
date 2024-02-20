import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import { getLocal } from "../helpers/function";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: [],
  cartLength: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
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
          totalPrice: 0,
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
      let checked = cart.products.map((elem) => elem.item.id === id);
      return checked.length > 0 ? true : false;
    }
  };

  // ! DELETE
  const deleteProductInCart = (id) => {
    let cart = getLocal();
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart))
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    })
  };

  const values = {
    readCart,
    addToCart,
    cart: state.cart,
    checkProductInCart,
    deleteProductInCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
}
