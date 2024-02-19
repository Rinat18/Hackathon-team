import React from "react";
import ProductListPage from "../product/ProductListPage";
import "./Pages.scss"

export default function HomePage() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <ProductListPage />
        </div>
      </div>
    </>
  );
}
