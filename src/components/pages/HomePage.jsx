import React from "react";
import SliderPage from "../home/SliderPage";
import ProductListPage from "../product/ProductListPage";
import "./Pages.scss";

export default function HomePage() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <SliderPage />
          <ProductListPage />
        </div>
      </div>
    </>
  );
}
