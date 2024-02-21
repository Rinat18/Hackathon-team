import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseProduct } from "../../context/ProductContextProvider";
import ProductListPage from "./ProductListPage";

export default function DetailProductPage() {
  const { id } = useParams();
  const { getOneProduct, oneProduct, getProducts } = UseProduct();
  useEffect(() => {
    getOneProduct(id);
    getProducts();
  }, []);

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
            <button>В корзину</button>
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
      <div className="forUsers">
        <span>Вам будет интересно</span>
        <div>
          <ProductListPage />
        </div>
      </div>
    </>
  );
}
