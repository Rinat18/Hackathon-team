import React, { useEffect } from "react";
import { UseProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

export default function ProductListPage() {
  const { getProducts, products } = UseProduct();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div className="list-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="cardList">
        {products && (
          <>
            {products.map((elem) => (
              <ProductCard key={elem.id} elem={elem} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
