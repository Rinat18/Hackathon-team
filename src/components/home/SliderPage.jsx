import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { Carousel } from "react-bootstrap";
import background1 from "../../images/bg1.png";
import background2 from "../../images/bg2.png";
import background3 from "../../images/bg3.png";
import logo from "../../images/b10d8aa265c089eb54d1e1666fef2c17 1.png";
import "./HomePage.scss";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useCart } from "../../context/CartContextProvider";
const SliderPage = () => {
  const [index, setIndex] = useState(0);
  const { addToCart } = useCart();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="conteiner">
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
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
        </Carousel> */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="swiper1">
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
          </SwiperSlide>
          <SwiperSlide className="swiper2">
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
                <button onClick={() => addToCart()}>В Корзину</button>
                <button>В Избранное</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper3">
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
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
};

export default SliderPage;
