import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import background1 from "../../images/bg1.png";
import background2 from "../../images/bg2.png";
import background3 from "../../images/bg3.png";
import logo from "../../images/b10d8aa265c089eb54d1e1666fef2c17 1.png";
import "./HomePage.scss";
const SliderPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="conteiner">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={background1} alt="" />
            <Carousel.Caption>
              <div className="carel">
                <img src={logo} alt="" />
                <p>
                  Тотальная война нового поколения началась! <br /> Сыграйте в
                  Battlefield™ 2042 уже сегодня. <br /> Адаптируйтесь и
                  процветайте!
                </p>
                <span>
                  4 999 P <b>-25%</b>
                </span>
                <div className="button">
                  <button>В Корзину</button>
                  <button>В Избранное</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={background2} alt="" />

            <Carousel.Caption>
              <div className="carel">
                <img src={logo} alt="" />
                <p>
                  Тотальная война нового поколения началась! <br /> Сыграйте в
                  Battlefield™ 2042 уже сегодня. <br /> Адаптируйтесь и
                  процветайте!
                </p>
                <span>
                  4 999 P <b>-25%</b>
                </span>
                <div className="button">
                  <button>В Корзину</button>
                  <button>В Избранное</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={background3} alt="" />

            <Carousel.Caption>
              <div className="carel">
                <img src={logo} alt="" />
                <p>
                  Тотальная война нового поколения началась! <br /> Сыграйте в
                  Battlefield™ 2042 уже сегодня. <br /> Адаптируйтесь и
                  процветайте!
                </p>
                <span>
                  4 999 P <b>-25%</b>
                </span>
                <div className="button">
                  <button>В Корзину</button>
                  <button>В Избранное</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default SliderPage;
