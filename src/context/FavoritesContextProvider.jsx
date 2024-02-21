import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import { getLocal, getLocalFavorites } from "../helpers/function";

export const FavoriteContext = createContext();
export const useFavorite = () => useContext(FavoriteContext);

const INIT_STATE = {
  favorites: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_FAVORITE:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // !READ
  const readFavorite = () => {
    let favorite = getLocalFavorites();
    if (!favorite) {
      localStorage.setItem(
        "favorite",
        JSON.stringify({
          favorites: [],
        })
      );
      favorite = {
        favorites: [],
      };
    }
    dispatch({
      type: ACTIONS.GET_FAVORITE,
      payload: favorite,
    });
  };

  // !ADD TO FAVORITE
  const addToFavorite = (card) => {
    let favorite = getLocalFavorites();
    let newFavItem = {
      item: card,
    };
    let checkCardInFav = favorite.favorites.filter(
      (elem) => elem.item.id === card.id
    );
    if (checkCardInFav.length === 0) {
      favorite.favorites.push(newFavItem);
    } else {
      favorite.products = favorite.products.filter(
        (elem) => elem.item.id !== card.id
      );
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
    dispatch({
      type: ACTIONS.GET_FAVORITE,
      payload: favorite,
    });
  };

  //   ! check Product
  const checkProduct = (id) => {
    let favorite = getLocalFavorites();
    if (favorite) {
      let checked = favorite.products.filter((elem) => elem.item.id === id);
      return checked.length > 0 ? true : false;
    }
  };

  const values = {
    favorites: state.favorites,
    state,
    checkProduct,
    readFavorite,
    addToFavorite,
  };

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesContextProvider;
