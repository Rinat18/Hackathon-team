import React, { useEffect, useState } from "react";
import SliderPage from "../home/SliderPage";
import "./Pages.scss";
import Pagination from "../product/Pagination";
import { UseProduct } from "../../context/ProductContextProvider";
import ProductCard from "../product/ProductCard";
import steav from "../../images/steave.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { admin } from "../../helpers/const";

export default function HomePage() {
  const navigate = useNavigate();
  const { getProducts, products } = UseProduct();
  const { user } = useAuth();
  useEffect(() => {
    getProducts();
  }, []);
  const [page, setPage] = useState(1);
  const itemsPages = 4;
  const count = Math.ceil(products.length / itemsPages);
  const currentData = () => {
    const begin = (page - 1) * itemsPages;
    const end = begin + itemsPages;
    return products.slice(begin, end);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  const handleClick = () => {
    navigate("/add");
  };
  return (
    <>
      <div className="home">
        <div className="home__container">
          <SliderPage />
          {user == admin ? (
            <button
              style={{ marginTop: "50px" }}
              onClick={handleClick}
              className="btn-add-card"
            >
              Добавить товар
            </button>
          ) : null}
          <div className="cardList">
            {products && (
              <>
                {currentData().map((elem) => (
                  <ProductCard key={elem.id} elem={elem} />
                ))}
              </>
            )}
          </div>
          <div className="pagination">
            <Pagination count={count} page={page} handleChange={handleChange} />
          </div>
        </div>
        <div className="maincraftCard">
          <div className="maincraftCard__items">
            <span>
              Играй уже сейчас в <br /> Minecraft
            </span>
            <p>
              4 999 Р <b>-40%</b>
            </p>
            <div className="maincraftCardItems__btn" style={{ marginLeft: 20 }}>
              <button>Купить </button>
              <button>В избранное</button>
            </div>
          </div>
          <div className="maincraftCard__steave">
            <div className="maincraftCard-steve__rightContent">
              <span>
                Играй уже сейчас в <br /> Minecraft dangerous
              </span>
              <p>
                4 999 Р <b>-40%</b>
              </p>
              <div className="maincraftCard-steave-rightContent__btn">
                <button>Купить </button>
                <button>В избранное</button>
              </div>
            </div>
            <div className="maincraftCard-steave__leftContent">
              <img src={steav} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
