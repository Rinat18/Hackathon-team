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
import { admin } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";


export default function ProductCard({ elem }) {
  const { user } = useAuth();
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
          style={{
            width: 40,
            backgroundColor: "gray",
            borderRadius: "15px",
          }}
          className="card__overlayFavorites"
        >
          {/* <svg
            onClick={() => addToFavorite(elem)}
            enable-background="new 0 0 64 64"
            height="64px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 64 64"
            width="64px"
            space="preserve"
          >
            <path
              d="M32.194,7.106c-13.689,0-24.826,11.137-24.826,24.826c0,13.69,11.137,24.828,24.826,24.828  c13.689,0,24.826-11.138,24.826-24.828C57.021,18.243,45.884,7.106,32.194,7.106z M45.911,30.117v0.001l-7.187,5.2l2.768,8.46  c0.044,0.132,0.067,0.273,0.067,0.417c0,0.739-0.598,1.339-1.337,1.339c-0.294,0-0.564-0.094-0.784-0.253l-7.243-5.239l-7.243,5.239  c-0.22,0.159-0.49,0.253-0.783,0.253c-0.74,0-1.339-0.599-1.339-1.339c0-0.145,0.024-0.285,0.068-0.417l2.769-8.46l-7.187-5.2  v-0.001c-0.336-0.242-0.554-0.637-0.554-1.083c0-0.739,0.598-1.337,1.338-1.337h8.897l2.755-8.421  c0.168-0.547,0.677-0.945,1.28-0.945c0.602,0,1.112,0.398,1.279,0.945l2.755,8.421h8.897c0.739,0,1.338,0.598,1.338,1.337  C46.464,29.48,46.246,29.875,45.911,30.117z"
              fill={checkProduct(elem.id) ? "green" : "black"}
            />
          </svg> */}
          <FavoriteBorderIcon
            onClick={() => addToFavorite(elem)}
            sx={{ color: checkProduct(elem.id) ? "green" : "black" }}
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
          {user === admin ? (
            <>
              <DeleteIcon
                sx={{ color: "white", ml: "15px" }}
                onClick={() => deleteProduct(elem.id)}
              />
              <EditIcon
                sx={{ color: "white", ml: "10px" }}
                onClick={() => navigate(`edit/${elem.id}`)}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
