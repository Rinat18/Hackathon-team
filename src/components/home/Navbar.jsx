import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Avatar from "@mui/material/Avatar";

import union from "../../images/Union.png";
import catalogLogo from "../../images/catalogMain.svg";
import "./HomePage.scss";
import { Link, useNavigate } from "react-router-dom";
import { getProductsCountInCart } from "../../helpers/function";
import { useCart } from "../../context/CartContextProvider";
import { Badge } from "@mui/base";
import { useFavorite } from "../../context/FavoritesContextProvider";
import logoMain from "../../images/logoMain.svg";
import { useAuth } from "../../context/AuthContextProvider";

export default function Navbar() {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const { addToCart } = useCart();
  useEffect(() => {
    setCartCount(getProductsCountInCart());
  }, [addToCart]);
  const { addToFavorite, favorites, getFavoriteCount } = useFavorite();
  const [favoriteCount, setFavoriteCount] = useState(0);
  getFavoriteCount();
  useEffect(() => {
    setFavoriteCount(getFavoriteCount());
    console.log(123);
  }, [favorites]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header-top"></div>
      <header className="header">
        <div className="header__container">
          <div onClick={() => navigate("/")} className="header__logo">
            <img src={logoMain} alt="" />
          </div>

          <div className="header__links">
            <div className="burger-menu">
              <div
                className={`burger-menu-btn ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
              {isOpen && (
                <div className="menu-items">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to="/filter"
                  >
                    Games Catalog
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to="#"
                  >
                    Promotion's
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to="#"
                  >
                    Support
                  </Link>
                </div>
              )}
            </div>
            <div className="header__links_nav">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/filter"
              >
                Games Catalog
              </Link>
            </div>

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
              {user == "GUEST" ? (
                <button
                  onClick={() => navigate("/registration")}
                  className="register__Navbar"
                >
                  Register
                </button>
              ) : (
                <button
                  onClick={() => handleLogout()}
                  className="logOut__Navbar"
                >
                  Log-Out
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
