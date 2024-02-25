import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";
import ProductListPage from "./ProductListPage";
import { useCart } from "../../context/CartContextProvider";
import { Avatar, IconButton } from "@mui/material";
import { Badge } from "react-bootstrap";
import { useAuth } from "../../context/AuthContextProvider";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export default function DetailProductPage() {
  const { id } = useParams();
  const { user } = useAuth();

  const {
    getOneProduct,
    oneProduct,
    addComments,
    readComments,
    comments,
    getProducts,
    addLikes,
    likes,
    readLikes,
  } = UseProduct();
  const { addToCart, checkProductInCart } = useCart();

  useEffect(() => {
    getOneProduct(id);
    getProducts();
    readComments(id);
    readLikes(id)
  }, []);
  console.log(comments);
  const [comm, setComm] = useState("молчит");
  const handleComment = () => {
    const obj = {
      name: user,
      text: comm,
      time: new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    console.log(obj);
    addComments(id, obj);
    setComm("");
  };
  const addToLikes = () => {
    const obj = {
      name: user,
      time: new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    addLikes(id, obj);
  };
  console.log(likes.length);
  return (
    <>
      <div className="detailsContainer">
        <div className="detailsContainer__leftContent">
          <img src={oneProduct.image} alt="" />
        </div>
        <div className="detailsContainer__rightContent">
          <h3>Купить {oneProduct.title}</h3>
          <p>
            {oneProduct.price} <b>-45%</b>
          </p>
          <div className="detailsContainer-rightContent__buttons">
            <button>Купить</button>

            {checkProductInCart(oneProduct.id) ? (
              <button
                style={{ backgroundColor: "#222222" }}
                onClick={() => addToCart(oneProduct)}
              >
                Уже в корзине
              </button>
            ) : (
              <button onClick={() => addToCart(oneProduct)}>В корзину</button>
            )}
            <Badge badgeContent={likes.length}  color="primary">
              <ThumbUpOffAltIcon onClick={() => addToLikes()} />
            </Badge>
            <Badge badgeContent={0}  color="primary">
              <ThumbDownOffAltIcon onClick={() => addToLikes()} />
            </Badge>
          </div>
          <div className="detailsContainer-rightContent__description">
            <div className="detailsContainer-rightContent-description__janr">
              <span>Жанр</span>
              <b>{oneProduct.category}</b>
            </div>
            <div className="detailsContainer-rightContent-description__janr">
              <span>Платформа</span>
              <b>Steam</b>
            </div>
            <div className="detailsContainer-rightContent-description__janr">
              <span>Регион активации</span>
              <b>Страны СНГ</b>
            </div>
          </div>
          {/* <div className="detailsContainer-rightContent-desciption__delivery">
            <button></button>
            <p>Гарантия качества</p>
          </div> */}
        </div>
      </div>
      <div className="aboutProduct">
        <span>Описание Товара</span>
        <div className="description">
          <p>{oneProduct.description}</p>
        </div>
      </div>
      <div className="commentsSection">
        <h4>Комментарии</h4>
        <div className="commentsSection__block">
          <div className="commentsSection__title">
            <span>Комментарии</span>
          </div>
          <div className="commentsSection__comments">
            {comments &&
              comments.map((elem) => (
                <div
                  style={{
                    display: "flex",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                >
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt={user} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                  <div style={{ color: "white", marginLeft: "5px" }}>
                    <div>{elem.name}</div>
                    <div>
                      {elem.text} {elem.time}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="commentsSection-input">
            <div class="input-container">
              <input
                type="text"
                id="name"
                name="name"
                class="input-field"
                placeholder="Оставьте ваш комментарии"
                value={comm}
                onChange={(e) => setComm(e.target.value)}
              />
            </div>

            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleComment}
            >
              <path
                d="M4.02 42l41.98-18-41.98-18-.02 14 30 4-30 4z"
                fill="white"
              />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <div className="forUsers">
        <span>Вам будет интересно</span>
        <div>
          <ProductListPage />
        </div>
      </div>
    </>
  );
}
