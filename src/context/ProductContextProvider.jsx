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
  oneProduct: {},
  categories: [],
  comments: [],
  likes: [],
  unlikes: [],
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
      case ACTIONS.GET_COMMENTS:
        return { ...state, comments: action.payload };
      case ACTIONS.GET_LIKES:
        return { ...state, likes: action.payload };
      case ACTIONS.GET_UNLIKES:
        return { ...state, unlikes: action.payload };
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
    const { data } = await axios(`${API_PROD}${window.location.search}`);
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

  const editProduct = async (id, editedProduct) => {
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
    getProducts();
  };
  // ! GET COMMENTS

  const readComments = async (id) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    dispatch({
      type: ACTIONS.GET_COMMENTS,
      payload: data.comments,
    });
  };

  //! ADD COMMENT
  const addComments = async (id, obj) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    data.comments.push(obj);
    await axios.patch(`${API_PROD}/${id}`, data);
    readComments(id);
  };
  // !READ UP LIKES
  const readLikes = async (id) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    dispatch({
      type: ACTIONS.GET_LIKES,
      payload: data.likes,
    });
  };
  // ! ADD UP LIKE
  const addLikes = async (id, obj) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    const check = data.likes.filter((elem) => elem.name === obj.name);
    if (check.length == 0) {
      data.likes.push(obj);
      await axios.patch(`${API_PROD}/${id}`, data);
      readLikes(id);
      data.unlikes = data.unlikes.filter((elem) => elem.name !== obj.name);
      await axios.patch(`${API_PROD}/${id}`, data);
      readunLikes(id);
    } else {
      data.likes = data.likes.filter((elem) => elem.name !== obj.name);
      await axios.patch(`${API_PROD}/${id}`, data);
      readLikes(id);
    }
  };
  // !READ Un LIKES
  const readunLikes = async (id) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    dispatch({
      type: ACTIONS.GET_UNLIKES,
      payload: data.unlikes,
    });
  };
  // ! ADD UN LIKE
  const addunLikes = async (id, obj) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    const check = data.unlikes.filter((elem) => elem.name === obj.name);
    if (check.length == 0) {
      data.unlikes.push(obj);
      await axios.patch(`${API_PROD}/${id}`, data);
      readunLikes(id);
      data.likes = data.likes.filter((elem) => elem.name !== obj.name);
      await axios.patch(`${API_PROD}/${id}`, data);
      readLikes(id);
    } else {
      data.unlikes = data.unlikes.filter((elem) => elem.name !== obj.name);
      await axios.patch(`${API_PROD}/${id}`, data);
      readunLikes(id);
    }
  };
  //! like style
  const checkLike = async (id, user) => {
    const { data } = await axios(`${API_PROD}/${id}`);
    if (data) {
      let checked = data.likes.filter((elem) => elem.name === user);
      console.log(checked);
      return checked.length > 0 ? true : false;
    }
  };

  const values = {
    readComments,
    addComments,
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    getCategories,
    categories: state.categories,
    createCategory,
    fetchByParams,
    comments: state.comments,
    likes: state.likes,
    readLikes,
    addLikes,
    checkLike,
    addunLikes,
    unlikes: state.unlikes,
    readunLikes,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}
