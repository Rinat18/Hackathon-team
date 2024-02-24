import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";
import ProductListPage from "./ProductListPage";
import { useCart } from "../../context/CartContextProvider";
import { Avatar } from "@mui/material";
import { Badge } from "react-bootstrap";

export default function DetailProductPage() {
  const { id } = useParams();
  const { getOneProduct, oneProduct, getProducts } = UseProduct();
  const { cart, readCart, addToCart, checkProductInCart } = useCart();

  useEffect(() => {
    getOneProduct(id);
    getProducts();
  }, []);
  const handleClick = () => {
    const randomString = Math.random().toString(36).substring(7);
    alert(`Ваш заказ под ID ${randomString} оформлен`);
  };

  console.log(oneProduct);
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
            <Avatar />
          </div>
          <div className="commentsSection-input">
            <div class="input-container">
              <input
                type="text"
                id="name"
                name="name"
                class="input-field"
                placeholder="Оставьте ваш комментарии"
              />
            </div>

            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
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
