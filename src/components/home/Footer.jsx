import React from 'react'
import paypal from "../../images/2560px-PayPal_logo 1 (1).png"
import mastercard from "../../images/mastercard 2.png"
import visa from "../../images/Visa_Inc._logo 1.png"
import mirLogo from "../../images/1920px-Mir-logo.SVG 1.png"
import wabmoneylogo from "../../images/WebMoney_logo_blue 2 1.png"
import subtractor from "../../images/Subtract.png"
import version from "../../images/Google_Safe_Browsing (1) 1 (2).png"
import vk from "../../images/Vector (1).png"
import diccord from "../../images/Vector (2).png"
import twiter from "../../images/Vector (3).png"
import insta from "../../images/Vector (4).png"

export default function Footer() {
  return (
    <div>
      <div className='footer-nachalo'>
        <img className='paypal' src={paypal} alt="" />
        <img className='mastercard' src={mastercard} alt="" />
        <img className='visa' src={visa} alt="" />
        <img className='mirlogo' src={mirLogo} alt="" />
        <img className='wadmoneylogo' src={wabmoneylogo} alt="" />
        <img className='paypal' src={paypal} alt="" />
        <img className='paypal' src={paypal} alt="" />
      </div>
      <div className='FOOTER'>
        <div className='footer'>
        <div className='text'>
        О компании
        </div>
        <br />
        <div className='text-niz'>
        О нас
        </div>
        <br />
        <div className='text-niz'>
        Вакансии
        </div>
        <br />
        <div className='text-niz'>
        Реквизиты
        </div>
        </div>
        <div className='footer'>
        <div className='text'>
        Договор оферты
        </div>
        <br />
        <div className='text-niz'>
        Каталог
        </div>
        <br />
        <div className='text-niz'>
        Акции
        </div>
        <br />
        <div className='text-niz'>
        Личный кабинетc
        </div>
        </div>
        <div className='subtractor1'>
        <div className='text'>
        Договор оферты
        </div>
        <br />
        <div className='text-niz'>
        Каталог
        </div>
        <br />
        <div className='text-niz'>
        Акции
        </div>
        <br />
        <div className='text-niz'>
        Личный кабинет
        </div>
        </div>
        <img className='subtractor' src={subtractor} alt="" />
        <div className='subtractor-text'>verified<br />WebMoney</div>
        <img className='version' src={version} alt="" />
        <div className='subtractor-text'>Safe Browsing <br /> Google</div>
      </div>
      <div className='footer-konez'>
        <div className='konez'>
          Все продаваемые ключи закупаются у официальных дистрибьюторови издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza
        </div>
        <hr />
        <div className='information'>
        <div className='typ'>
        Правовая информация
        </div>
        <div className='tap'>Интернет-магазин игр «Playnchill» © 2022</div>
        <div className='icons'><img src={vk} alt="" /><img src={diccord} alt="" /><img src={twiter} alt="" /><img src={insta} alt="" /></div>
        </div>
      </div>
    </div>
  )
}
