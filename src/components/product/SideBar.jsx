import React from "react";
import "./products.scss";
export default function SideBar() {
  return (
    <>
      <div className="containerSideBar">
        <input type="text" placeholder="Я ищу..." />

        <div className="containerSiderBar__title">
          <h3>Тип аккаунта</h3>
          <div className="containerSideBar-title__checkbox">
            <label for="accaunt">
              <input type="checkbox" id="accaunt" name="accaunt" />
              Аккаунт
            </label>
            <label for="key">
              <input type="checkbox" id="key" name="key" />
              Лицинзионный ключ
            </label>
            <label for="activation">
              <input type="checkbox" id="activation" name="activation" />
              Активация
            </label>
            <label for="sartif">
              <input type="checkbox" id="sartif" name="sartif" />
              Лицинзионный ключ
            </label>
            <label for="activ">
              <input type="checkbox" id="activ" name="activ" />
              Активация
            </label>
          </div>
        </div>
        <button>Сбросить фильтры</button>
      </div>
    </>
  );
}
