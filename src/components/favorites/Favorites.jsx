import React, { useEffect } from "react";
import { useFavorite } from "../../context/FavoritesContextProvider";
import ProductCard from "../product/ProductCard";
import "../pages/Pages.scss";

const Favorites = () => {
  const { readFavorite, favorites,  } = useFavorite();
  useEffect(() => {
    readFavorite();
  }, []);
  console.log(favorites);
  return (
    <div className="cardList">
      {favorites.favorite &&
        favorites.favorite.map((elem) => (
          <ProductCard
            key={elem.id}
            elem={elem}
          />
        ))}
    </div>
  );
};

export default Favorites;
