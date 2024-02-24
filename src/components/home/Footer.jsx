import React from "react";
import visa from "../../images/Visa.svg";
import masterCard from "../../images/mastercard 2.svg";
import miraCard from "../../images/MiraPay.svg";
import paypal from "../../images/payPal.svg";
import webmMoney from "../../images/WebMoney_logo_blue 2 1.svg";
import webMoneyIcon from "../../images/WebMoneyMin.svg";
import googleSefity from "../../images/GoogleSefity.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__logos">
          <img src={paypal} alt="" />
          <img src={masterCard} alt="" />
          <img src={miraCard} alt="" />
          <img src={webmMoney} alt="" />
          <img src={visa} alt="" />
          <img src={paypal} alt="" />
        </div>
        <div className="footer__container">
          <div className="footer-container__aboutCompany">
            <h3>О компании</h3>
            <span>О нас</span>
            <span>Вакансии</span>
            <span>Реквизиты</span>
          </div>
          <div className="footer-container__contracts">
            <h3>Договор оферты</h3>
            <span>Каталог</span>
            <span>Акции</span>
            <span>Личный кабинет</span>
          </div>
          <div className="footer-container__contracts">
            <h3>Договор оферты</h3>
            <span>Каталог</span>
            <span>Акции</span>
            <span>Личный кабинет</span>
          </div>
          <div className="footer-container__qrCodes">
            <h3>Социальные сети</h3>
            <a href="http://qrcoder.ru" target="_blank">
              <img
                src="http://qrcoder.ru/code/?https%3A%2F%2Fwww.instagram.com%2Fbakytv_%3Figsh%3DNjFsczI3cDQ5NjBm&2&0"
                width="100"
                height="100"
                border="0"
                title="QR код"
              />
            </a>
          </div>
          <div className="footer-container__security">
            <div className="footer-container-security__webMoney">
              <img src={webMoneyIcon} alt="" />
              <div className="footer-container-security-webMoney__verifed">
                <span>verified</span>
                <b>WebMoney</b>
              </div>
            </div>
            <div className="footer-container-security__googleSafe">
              <img src={googleSefity} alt="" />
              <div className="footer-container-security-googleSafe__browsing">
                <span>Safe Browsing</span>
                <b>Google</b>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__ruls">
          <span>
            Все продаваемые ключи закупаются у официальных дистрибьюторови
            издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza
          </span>
        </div>
        <div className="footer__ourShop">
          <span>Интернет-магазин игр «Playnchill» © 2024 </span>
        </div>
      </footer>
    </>
  );
}
