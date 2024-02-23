import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import eclipse from "../../images/Ellipse 336.png";
import "./Product.scss";
import { useCart } from "../../context/CartContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useFavorite } from "../../context/FavoritesContextProvider";
export default function ProductCard({ elem }) {
  const { cart, readCart, addToCart, checkProductInCart } = useCart();
  const { addToFavorite, readFavorite, checkProduct } = useFavorite();

  useEffect(() => {
    readCart();
    readFavorite();
  }, []);
  const navigate = useNavigate();
  const { deleteProduct } = UseProduct();
  return (
    <div className="card">
      <div className="card__image">
        <img src={elem.image} alt="Product Image" />
        <div
          style={{ backgroundColor: "white", borderRadius: "20px" }}
          className="card__overlayFavorites"
        >
          <FavoriteBorderIcon
            onClick={() => addToFavorite(elem)}
            sx={{ fill: checkProduct(elem.id) ? "green" : "black" }}
          />
        </div>
        <div className="card__overlayCart">
          {elem && checkProductInCart(elem.id) ? (
            <button
              style={{ backgroundColor: "#222222" }}
              onClick={() => addToCart(elem)}
            >
              Уже в корзине
            </button>
          ) : (
            <button onClick={() => addToCart(elem)}>В корзину</button>
          )}
        </div>
      </div>

      <div className="card__container">
        <div className="card__prices">
          <p className="card__price">{elem.price}c</p>
          <p className="card__discount">discount</p>
          <p className="card__originalPrice">Original Price</p>
        </div>
        <div
          onClick={() => navigate(`/detail/${elem.id}`)}
          className="card__title"
        >
          {elem.title}
        </div>
        <div className="card__accs">
          <div className="card__steam">
            <img src={eclipse} alt="" />
            <div>Key</div>
          </div>
          <div className="card__steam card__steam2 ">
            <img src={eclipse} alt="" />
            <div>Steam</div>
          </div>

          <DeleteIcon
            sx={{ color: "white", ml: "15px" }}
            onClick={() => deleteProduct(elem.id)}
          />
          <EditIcon
            sx={{ color: "white", ml: "10px" }}
            onClick={() => navigate(`edit/${elem.id}`)}
          />
        </div>
      </div>
    </div>
  );
}
