import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Avatar from "@mui/material/Avatar";
import headerlogo from "../../images/Group 6012.png";
import union from "../../images/Union.png";
import catalogLogo from "../../images/Group 5287.png";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={headerlogo} alt="" />
          </div>
          <img className="header__catalog" src={catalogLogo} alt="" />
          <div className="header__input">
            <input placeholder="Поиск" type="text" />
            <img src={union} alt="" />
          </div>
          <div className="header__links">
            <FavoriteBorderIcon sx={{ marginRight: "10px", color: "white" }} />
            <ShoppingCartCheckoutIcon onClick={() => navigate("/cart")} sx={{ color: "green" }} />
            <div className="header__userName">
              <div className="header__userName_name">Rinat</div>
              <Avatar
                sx={{ border: "2px solid green" }}
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
