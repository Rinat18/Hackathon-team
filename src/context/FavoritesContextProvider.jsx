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
    let favorites = getLocalFavorites();
    if (!favorites) {
      localStorage.setItem(
        "favorites",
        JSON.stringify({
          favorite: [],
        })
      );
      favorites = {
        favorite: [],
      };
    }
    dispatch({
      type: ACTIONS.GET_FAVORITE,
      payload: favorites,
    });
  };

  // !ADD TO FAVORITE
  const addToFavorite = (card) => {
    let favorites = getLocalFavorites();

    let checkCardInFav = favorites.favorite.filter(
      (elem) => elem.id === card.id
    );

    if (checkCardInFav.length === 0) {
      favorites.favorite.push(card);
    } else {
      favorites.favorite = favorites.favorite.filter(
        (elem) => elem.id !== card.id
      );
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({
      type: ACTIONS.GET_FAVORITE,
      payload: favorites,
    });
  };

  //   ! check Product
  const checkProduct = (id) => {
    let favorites = getLocalFavorites();
    if (favorites) {
      let checked = favorites.favorite.filter((elem) => elem.id === id);
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
