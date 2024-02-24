import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Avatar from "@mui/material/Avatar";

import union from "../../images/Union.png";
import catalogLogo from "../../images/catalogMain.svg";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import {
  getFavoriteCount,
  getProductsCountInCart,
} from "../../helpers/function";
import { useCart } from "../../context/CartContextProvider";
import { Badge } from "@mui/base";
import { useFavorite } from "../../context/FavoritesContextProvider";
import logoMain from "../../images/logoMain.svg";
import { useAuth } from "../../context/AuthContextProvider";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const { addToCart } = useCart();
  useEffect(() => {
    setCartCount(getProductsCountInCart());
  }, [addToCart]);
  const { addToFavorite } = useFavorite();
  const [favoriteCount, setFavoriteCount] = useState(0);
  useEffect(() => {}, [addToFavorite]);
  setFavoriteCount(getFavoriteCount());
  if (getFavoriteCount() == 0) {
    setFavoriteCount(0);
  }
  return (
    <>
      <div className="header-top">
        <div className="header-top__money">
          <b>RU $</b>
          <p>Накопительный счет</p>
        </div>
      </div>
      <header className="header">
        <div className="header__container">
          <div onClick={() => navigate("/")} className="header__logo">
            <img src={logoMain} alt="" />
          </div>
          <img
            className="header__catalog"
            style={{ width: 25 }}
            src={catalogLogo}
            alt=""
          />
          <div className="header__input">
            <input placeholder="Поиск" type="text" />
            <img src={union} alt="" />
          </div>
          <div className="header__links" style={{ display: "flex" }}>
            <Badge
              badgeContent={favoriteCount}
              sx={{ marginRight: "10px" }}
              color="primary"
            >
              <FavoriteBorderIcon
                sx={{ marginRight: "2px", color: "white" }}
                onClick={() => navigate("/favorites")}
              />
            </Badge>

            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartCheckoutIcon
                onClick={() => navigate("/cart")}
                sx={{ color: "green" }}
              />
            </Badge>
            <div className="header__userName">
              <div className="header__userName_name">{user}</div>
              <Avatar
                sx={{ border: "2px solid green" }}
                alt={user}
                src="/static/images/avatar/2.jpg"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
