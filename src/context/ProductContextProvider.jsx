// ! IMPORTS
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API_CAT, API_PROD } from "../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ! HOOKS
const productContext = createContext();
export const UseProduct = () => useContext(productContext);

// ! STATE'S
const INIT_STATE = {
  products: [],
  oneProducts: {},
  categories: [],
};

export default function ProductContextProvider({ children }) {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };
      case ACTIONS.GET_ONE_PRODUCT:
        return { ...state, oneProduct: action.payload };
      case ACTIONS.GET_CATEGORIES:
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ! CREATE
  const addProduct = async (newProd) => {
    await axios.post(API_PROD, newProd);
  };

  // ! RENDER
  const getProducts = async () => {
    const { data } = await axios(API_PROD);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  // ! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API_PROD}/${id}`);
    getProducts();
  };

  // ! EDIT

  const editProducts = async (id, editedProduct) => {
    await axios.patch(`${API_PROD}/${id}`, editedProduct);
    navigate("/");
  };

  //! GET_ONE_PRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  };
  //! CREATE CATEGORY
  const createCategory = async (newCategory) => {
    await axios.post(API_CAT, newCategory);
    getCategories();
  };

  //! GET_CATEGORIES
  const getCategories = async () => {
    const { data } = await axios(API_CAT);
    dispatch({
      type: ACTIONS.GET_CATEGORIES,
      payload: data,
    });
  };

  //! FILTER
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    console.log(search);
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    editProducts,
    getOneProduct,
    oneProduct: state.oneProduct,
    createCategory,
    getCategories,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}
