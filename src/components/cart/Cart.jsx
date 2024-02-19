import React, { useEffect } from "react";
import { useCart } from "../../context/CartContextProvider";
import "./Home.scss";
import x from "../../images/Unionx.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Cart() {
  const { cart, readCart, addToCart, deleteProductInCart } = useCart();

  useEffect(() => {
    readCart();
  }, []);
  console.log(cart);
  return (
    <div className="cart">
      <div className="cart__container">
        <h2>Корзина</h2>
        <div className="cart__block">
          {cart.products &&
            cart.products.map((elem) => (
              <>
                <div className="cart__product">
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
                      <div className="cart__product__desc__prices__discount">
                        discount
                      </div>
                      <div className="cart__product__desc__prices__original">
                        original Price
                      </div>
                    </div>
                    <div className="cart__product__region">
                      Регион активации <span> Россия и страны СНГ</span>
                    </div>
                    <div className="cart__product__play">
                      Сервис активации <span>Steam</span>
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
                      min={1}
                      max={20}
                    />
                    <FavoriteBorderIcon sx={{ mt: "180px" }} />
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className="cart__totalPrice"></div>
      </div>
    </div>
  );
}
