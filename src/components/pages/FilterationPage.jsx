import React from "react";
import SideBar from "../product/SideBar";
import ProductListPage from "../product/ProductListPage";

export default function FilterationPage() {
  return (
    <div className="filterList">
      <div className="filterList__container">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="list">
          <ProductListPage />
        </div>
      </div>
    </div>
  );
}
