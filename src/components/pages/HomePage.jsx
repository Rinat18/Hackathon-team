import React, { useEffect, useState } from "react";
import SliderPage from "../home/SliderPage";
import "./Pages.scss";
import Pagination from "../product/Pagination";
import { UseProduct } from "../../context/ProductContextProvider";
import ProductCard from "../product/ProductCard";

export default function HomePage() {
  const { getProducts, products } = UseProduct();
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
  return (
    <>
      <div className="home">
        <div className="home__container">
          <SliderPage />


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
      </div>
    </>
  );
}
