import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContextProvider";
import "./Home.scss";
import x from "../../images/Unionx.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import vias from "../../images/vias.png";
import { useFavorite } from "../../context/FavoritesContextProvider";
import webMoney from "../../images/webMoney.png";
import bitCoin from "../../images/bitcoin.png";
import pay from "../../images/640px-Samsung_Pay_icon 1.png";
export default function Cart() {
  const { addToFavorite, readFavorite, checkProduct } = useFavorite();

  const {
    cart,
    readCart,
    changeProductCount,
    deleteProductInCart,
    clearCart,
    cartLength,
  } = useCart();

  useEffect(() => {
    readCart();
    readFavorite();
  }, []);

  const handleOrderSubmit = () => {
    clearCart();
    const randomString = Math.random().toString(36).substring(7);
    alert(`Ваш заказ под ID ${randomString} оформлен`);
  };

  return (
    <>
      <div className="cart">
        <div className="cart__container">
          <h2>Корзина</h2>
          <div className="cart__boxes">
            <div className="cart__block">
              {cart.products && cart.products.length > 0 ? (
                cart.products.map((elem) => (
                  <div className="cart__product" key={elem.item.id}>
                    <div className="cart__product__box">
                      <div className="cart__product__img">
                        <img src={elem.item.image} alt="" />
                      </div>
                      <div className="cart__product__desc">
                        <div className="cart__product__desc__title">
                          {elem.item.title}
                        </div>
                        <div className="cart__product__desc__prices">
                          <div className="cart__product__desc__prices__price">
                            {elem.item.price} c
                          </div>
                        </div>
                        <div className="cart__product__region">
                          Регион активации <span> Россия и страны СНГ</span>
                        </div>
                        <div className="cart__product__play">
                          Сервис активации <span>Steam</span>
                        </div>
                      </div>
                    </div>
                    <div className="cart__product__icons">
                      <img
                        style={{ backgroundColor: "black" }}
                        src={x}
                        onClick={() => deleteProductInCart(elem.item.id)}
                        alt=""
                      />
                      <input
                        type="number"
                        defaultValue={elem.count}
                        onChange={(e) =>
                          changeProductCount(elem.item.id, e.target.value)
                        }
                        min={1}
                        max={20}
                      />
                      <FavoriteBorderIcon
                        onClick={() => addToFavorite(elem)}
                        sx={{
                          fill: checkProduct(elem.id) ? "green" : "#424140",
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <h3 className="cartEmty">Корзина пуста</h3>
              )}
            </div>
            <div className="cart__totalPriceBlock">
              <div className="cart__totalPrice">
                <div className="cart__totalPrice__tovars">
                  {cartLength} товаров
                </div>
                <div className="cart__totalPrice__price">
                  {cart.totalPrice} c
                </div>
                <button
                  className="cart__totalPrice__buy"
                  onClick={handleOrderSubmit}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <div className="formPaymant__cards">
          <span>Банковские карты</span>
          <img src={vias} style={{ width: 200 }} alt="" />
        </div>
        <div className="formPaymant__cards">
          <span>Эллектронные кошельки</span>
          <img src={webMoney} style={{ width: 200 }} alt="" />
        </div>
        <div className="formPaymant__cards">
          <span>Криптовалюта</span>
          <img src={bitCoin} style={{ width: 200 }} alt="" />
        </div>
        <div className="formPaymant__cards">
          <span>Samsung pay</span>
          <img src={pay} style={{ width: 70 }} alt="" />
        </div>
      </div>
    </>
  );
}
