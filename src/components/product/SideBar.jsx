import React, { useState } from "react";
import "./products.scss";

export default function SideBar() {
  const [price, setPrice] = useState(50); // Initial price value

  const handlePriceChange = (event) => {
    setPrice(event.target.value); // Update the price when the range input changes
  };

  return (
    <>
      <div className="containerSideBar">
        <input type="text" placeholder="Я ищу..." />
        <div className="containerSiderBar__title">
          <h3>Тип аккаунта</h3>
          <div className="containerSideBar-title__checkbox">
            <label htmlFor="account">
              <input type="checkbox" id="account" name="account" />
              Аккаунт
            </label>
            <label htmlFor="key">
              <input type="checkbox" id="key" name="key" />
              Лицинзионный ключ
            </label>
            <label htmlFor="activation">
              <input type="checkbox" id="activation" name="activation" />
              Активация
            </label>
            <label htmlFor="artifact">
              <input type="checkbox" id="artifact" name="artifact" />
              Артефакт
            </label>
            <label style={{ marginTop: 30 }} htmlFor="priceRange">
              Цена: {price}
            </label>{" "}
            {/* Display the current price */}
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min="0"
              max="100"
              step="1"
              value={price} // Set the value of the range input to the price
              onChange={handlePriceChange} // Handle changes to the range input
            />
          </div>
        </div>
        <button>Сбросить фильтры</button>
      </div>
    </>
  );
}
