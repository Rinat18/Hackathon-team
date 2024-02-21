import React, { useEffect } from "react";
import { useFavorite } from "../../context/FavoritesContextProvider";

const Favorites = () => {
  const { readFavorite, favorites } = useFavorite();
  useEffect(() => {
    readFavorite();
  }, []);
  console.log(favorites);
  return <div></div>;
};

export default Favorites;
